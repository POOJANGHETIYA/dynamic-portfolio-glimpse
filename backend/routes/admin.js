const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const Project = require('../models/Project');
const Profile = require('../models/Profile');
const Education = require('../models/Education');
const Experience = require('../models/Experience');
const Skill = require('../models/Skill');

// Auth routes
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Protected routes
router.use(auth);

// Projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/projects', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/projects/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Profile
router.get('/profile', async (req, res) => {
  try {
    const profile = await Profile.findOne();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/profile', async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.json(profile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Education
router.get('/education', async (req, res) => {
  try {
    const education = await Education.find().sort({ timeline: -1 });
    res.json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/education', async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();
    res.status(201).json(education);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/education/:id', async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(education);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/education/:id', async (req, res) => {
  try {
    await Education.findByIdAndDelete(req.params.id);
    res.json({ message: 'Education entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Experience
router.get('/experience', async (req, res) => {
  try {
    const experience = await Experience.find().sort({ createdAt: -1 });
    res.json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/experience', async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(201).json(experience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/experience/:id', async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(experience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/experience/:id', async (req, res) => {
  try {
    await Experience.findByIdAndDelete(req.params.id);
    res.json({ message: 'Experience entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Skills
router.get('/skills', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/skills', async (req, res) => {
  try {
    const skill = new Skill(req.body);
    await skill.save();
    res.status(201).json(skill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/skills/:id', async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(skill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/skills/:id', async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.json({ message: 'Skill category deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;