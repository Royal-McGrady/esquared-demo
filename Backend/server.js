const express = require('express');
const sql = require('mssql');
const multer = require('multer');
const path = require('path');
const cors = require('cors'); // Add CORS support

const app = express();
const port = 3002; // Use a different port number

const pool = new sql.ConnectionPool({
  user: 'royalmcgrady',
  server: 'sqldatabaseesquare.database.windows.net', // Use 'server' instead of 'host'
  database: 'esquare',
  password: '@Sunshine1234',
  port: 1433,
  options: {
    encrypt: true, // Enable encryption for Azure SQL
    trustServerCertificate: false,
    connectTimeout: 30000, // 30 seconds
  },
});


// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save files in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file to avoid conflicts
  },
});

const upload = multer({ storage });

pool.connect()
  .then(() => {
    console.log('Connected to SQL Server');
    return pool.request().query('SELECT 1 AS test'); // Test query
  })
  .then(result => {
    console.log('Test Query Result:', result.recordset);
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });



// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS

// API endpoint to handle form submission
app.post('/api/data', upload.fields([
  { name: 'pitchDeck', maxCount: 1 },
  { name: 'historicalFinancials', maxCount: 1 },
  { name: 'capTable', maxCount: 1 },
]), async (req, res) => {
  try {
    const {
      fullName,
      email,
      phoneNumber,
      companyName,
      website,
      industry,
      location,
      yearFounded,
      ownershipSplit,
      stageOfBusiness,
      arr,
      mrr,
      mau,
      dau,
      userRetentionRate,
      conversionRate,
      mvpDeveloped,
      patentsOrIP,
      competitors,
      goToMarketStrategy,
      runway,
      burnRate,
      grossMargins,
      operatingMargins,
      fundingRaised,
      foundersDetails,
      teamExperience,
      keyMilestones,
      plannedMilestones,
      averageDealSize,
      salesCycleLength,
      cogs,
      revenueMilestone,
      customerGrowthTarget,
    } = req.body;

    const pitchDeck = req.files['pitchDeck'] ? req.files['pitchDeck'][0].path : null;
    const historicalFinancials = req.files['historicalFinancials'] ? req.files['historicalFinancials'][0].path : null;
    const capTable = req.files['capTable'] ? req.files['capTable'][0].path : null;

    // Insert data into the database
    const request = new sql.Request(pool); 

    request.input('fullName', sql.VarChar, fullName);
    request.input('email', sql.VarChar, email);
    request.input('phoneNumber', sql.VarChar, phoneNumber);
    request.input('companyName', sql.VarChar, companyName);
    request.input('website', sql.VarChar, website); 
    request.input('industry', sql.VarChar, industry);
    request.input('location', sql.VarChar, location);
    request.input('yearFounded', sql.Int, yearFounded); 
    request.input('ownershipSplit', sql.VarChar, ownershipSplit); 
    request.input('stageOfBusiness', sql.VarChar, stageOfBusiness); 
    request.input('arr', sql.Decimal, arr); 
    request.input('mrr', sql.Decimal, mrr); 
    request.input('mau', sql.Int, mau); 
    request.input('dau', sql.Int, dau); 
    request.input('userRetentionRate', sql.Decimal, userRetentionRate); 
    request.input('conversionRate', sql.Decimal, conversionRate); 
    request.input('mvpDeveloped', sql.Bit, mvpDeveloped); // Assuming mvpDeveloped is a boolean
    request.input('patentsOrIP', sql.VarChar, patentsOrIP); 
    request.input('competitors', sql.VarChar, competitors); 
    request.input('goToMarketStrategy', sql.VarChar, goToMarketStrategy); 
    request.input('runway', sql.Int, runway); 
    request.input('burnRate', sql.Decimal, burnRate); 
    request.input('grossMargins', sql.Decimal, grossMargins); 
    request.input('operatingMargins', sql.Decimal, operatingMargins); 
    request.input('fundingRaised', sql.Decimal, fundingRaised); 
    request.input('foundersDetails', sql.VarChar, foundersDetails); 
    request.input('teamExperience', sql.VarChar, teamExperience); 
    request.input('keyMilestones', sql.VarChar, keyMilestones); 
    request.input('plannedMilestones', sql.VarChar, plannedMilestones); 
    request.input('averageDealSize', sql.Decimal, averageDealSize); 
    request.input('salesCycleLength', sql.Int, salesCycleLength); 
    request.input('cogs', sql.Decimal, cogs); 
    request.input('revenueMilestone', sql.Decimal, revenueMilestone); 
    request.input('customerGrowthTarget', sql.Decimal, customerGrowthTarget); 
    request.input('pitchDeck', sql.VarChar, pitchDeck); 
    request.input('historicalFinancials', sql.VarChar, historicalFinancials); 
    request.input('capTable', sql.VarChar, capTable); 

    const query = `
      INSERT INTO your_table (
        fullName, email, phoneNumber, companyName, website, industry, location,
        yearFounded, ownershipSplit, stageOfBusiness, arr, mrr, mau, dau,
        userRetentionRate, conversionRate, mvpDeveloped, patentsOrIP, competitors,
        goToMarketStrategy, runway, burnRate, grossMargins, operatingMargins,
        fundingRaised, foundersDetails, teamExperience, keyMilestones,
        plannedMilestones, averageDealSize, salesCycleLength, cogs,
        revenueMilestone, customerGrowthTarget, pitchDeck, historicalFinancials, capTable
      ) VALUES (
        @fullName, @email, @phoneNumber, @companyName, @website, @industry, @location,
        @yearFounded, @ownershipSplit, @stageOfBusiness, @arr, @mrr, @mau, @dau,
        @userRetentionRate, @conversionRate, @mvpDeveloped, @patentsOrIP, @competitors,
        @goToMarketStrategy, @runway, @burnRate, @grossMargins, @operatingMargins,
        @fundingRaised, @foundersDetails, @teamExperience, @keyMilestones,
        @plannedMilestones, @averageDealSize, @salesCycleLength, @cogs,
        @revenueMilestone, @customerGrowthTarget, @pitchDeck, @historicalFinancials, @capTable
      )
    `;

    await request.query(query);

    res.status(201).json({ message: 'Data inserted successfully' }); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});