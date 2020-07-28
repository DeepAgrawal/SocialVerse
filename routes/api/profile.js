const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');

const User = require('../../models/User');
const Profile = require('../../models/Profile');

// Get current user profile
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['name', 'college']);
    if (!profile) {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('💥Server error');
  }
});

// Create or Update user profile
router.post(
  '/',
  [
    auth,
    [
      check('headline', 'Headline is required').not().isEmpty(),
      check('skills', 'Skills are required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    const {
      headline,
      about,
      location,
      website,
      skills,
      githubusername,
      twitter,
      facebook,
      linkedin,
    } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (headline) profileFields.headline = headline;
    if (about) profileFields.about = about;
    if (location) profileFields.location = location;
    if (website) profileFields.website = website;
    if (skills) {
      profileFields.skills = skills.split(',').map((skill) => skill.trim());
    }
    if (githubusername) profileFields.githubusername = githubusername;
    profileFields.social = {};
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (linkedin) profileFields.social.linkedin = linkedin;

    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        // update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }

      // if not found then create
      profile = new Profile(profileFields);
      await profile.save();
      res.json(profile);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('💥Server Error');
    }
  }
);

// get all profiles
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'college']);
    res.json(profiles);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('💥Server Error');
  }
});

// get specific user profile by user_id
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate('user', ['name', 'college']);
    //  If profile does not exist
    if (!profile) {
      return res.status(400).send({ msg: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    if (error.kind == 'ObjectId') {
      return res.status(400).send({ msg: 'Profile not found' });
    }
    res.status(500).send('💥Server Error');
  }
});

// delete a profile by user id
router.delete('/', auth, async (req, res) => {
  try {
    // @todo remove user's post

    // remove user profile
    await Profile.findOneAndRemove({ user: req.user.id });
    //  remove user
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: 'User removed' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('💥Server Error');
  }
});

module.exports = router;
