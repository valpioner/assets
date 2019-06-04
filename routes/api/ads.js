const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Ad model
const Ad = require('../../models/Ad');
//Profile model
const Profile = require('../../models/Profile');

// Load Validation
const validateAdInput = require('../../validation/ad');

// @route   GET api/ads/test
// @desc    Tests ad route
// @access  Public
router.get('/test', (req, res) => res.json({msg: "Ads Works"}));

// @route   GET api/ads
// @desc    Get ads
// @access  Public
router.get('/', (req, res) => {
  Ad.find()
    .sort({date: -1})
    .then(ads => res.json(ads))
    .catch(err => res.status(404).json({noadfound: 'No ads found'}))
});

// @route   GET api/ads/:id
// @desc    Get ad by id
// @access  Public
router.get('/:id', (req, res) => {
  Ad.findById(req.params.id)
    .then(ad => res.json(ad))
    .catch(err => res.status(404).json({noadfound: 'No ad found with that ID'}))
});

// @route   POST api/ads
// @desc    Create ad
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateAdInput(req.body);

  // Check Validation
  if (!isValid) {
    // If any errors, send 400 with errors object
    return res.status(400).json(errors);
  }

  const newAd = new Ad({
    text: req.body.text,
    name: req.body.name,
    avatar: req.body.avatar,
    user: req.user.id
  });

  newAd.save().then(ad => res.json(ad));
});

// @route   DELETE api/ads/:id
// @desc    Delete ad
// @access  Private
router.delete('/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
  Profile.findOne({user: req.user.id})
    .then(profile => {
      Ad.findById(req.params.id)
        .then(ad => {
          // Check for ad owner
          if (ad.user.toString() !== req.user.id) {
            return res.status(401).json({notauthorized: 'User not authorized'});
          }
          // Delete
          ad.remove().then(() => res.json({success: true}));
        })
        .catch(err => res.status(404).json({adnotfound: 'No ad found'}));
    })
});

// @route   POST api/ads/like/:id
// @desc    Like ad
// @access  Private
router.post('/like/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
  Profile.findOne({user: req.user.id})
    .then(profile => {
      Ad.findById(req.params.id)
        .then(ad => {
          if (ad.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
            return res.status(400).json({alreadyliked: 'User already liked this ad'});
          }

          // Add user id to likes array
          ad.likes.unshift({user: req.user.id});

          ad.save().then(ad => res.json(ad));
        })
        .catch(err => res.status(404).json({adnotfound: 'No ad found'}));
    })
});

// @route   POST api/ads/unlike/:id
// @desc    Unlike ad
// @access  Private
router.post('/unlike/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
  Profile.findOne({user: req.user.id})
    .then(profile => {
      Ad.findById(req.params.id)
        .then(ad => {
          if (ad.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
            return res.status(400).json({notliked: 'You have not yet liked this ad'});
          }

          // Get remove index
          const removeIndex = ad.likes
            .map(item => item.user.toString())
            .indexOf(req.user.id);

          // Splice out of array
          ad.likes.splice(removeIndex, 1);
          ad.save().then(ad => res.json(ad));
        })
        .catch(err => res.status(404).json({adtnotfound: 'No ad found'}));
    })
});

// @route   POST api/ads/comment/:id
// @desc    Add comment to ad
// @access  Private
router.post('/comment/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
  const { errors, isValid } = validateAdInput(req.body);

  // Check Validation
  if (!isValid) {
    // If any errors, send 400 with errors object
    return res.status(400).json(errors);
  }

  Ad.findById(req.params.id)
    .then(ad => {
      const newComment = {
        text: req.body.text,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.user.id
      }

      // Add to comments array
      ad.comments.unshift(newComment);

      // Save
      ad.save().then(ad => res.json(ad));
    })
    .catch(err => res.status(404).json({adnotfound: 'No ad found'}));
});

// @route   DELETE api/ads/comment/:id/:comment_id
// @desc    Delete comment from ad
// @access  Private
router.delete('/comment/:id/:comment_id', passport.authenticate('jwt', {session: false}), (req, res) => {
  Ad.findById(req.params.id)
    .then(ad => {
      // Check to see if comment exists
      if (ad.comments.filter(comment => comment._id.toString() === req.params.comment_id).length === 0) {
        return res.status(404)/json({commentnotexists: 'Comment does not exist'});
      }

      // Get remove index
      const removeIndex = ad.comments
        .map(item => item._id.toString())
        .indexOf(req.params.comment_id);

      // Splice comment out of array
      ad.comments.splice(removeIndex, 1);

      ad.save().then(ad => res.json(ad));
    })
    .catch(err => res.status(404).json({adnotfound: 'No ad found'}));
});

module.exports = router;