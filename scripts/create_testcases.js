import ExcelJS from 'exceljs';
import fs from 'fs';
const dir = './testcaseData';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
const workbook = new ExcelJS.Workbook();
const sheet = workbook.addWorksheet('Login Test Cases');
sheet.columns = [
  { header: 'testId', key: 'testId', width: 15 },
  { header: 'test case description', key: 'description', width: 70 },
  { header: 'expected result', key: 'expected', width: 70 },
  { header: 'actual result', key: 'actual', width: 70 },
  { header: 'status', key: 'status', width: 20 }
];
const rows = [
  { testId: 'TC001', description: 'Verify login page loads successfully with correct title and header.', expected: 'Login page displays correctly with sign-in header and login form fields.', actual: '', status: 'Not Executed' },
  { testId: 'TC002', description: 'Verify email address field accepts valid email input.', expected: 'Email field accepts a valid email address and does not show validation error.', actual: '', status: 'Not Executed' },
  { testId: 'TC003', description: 'Verify password field accepts input and hides characters.', expected: 'Password field accepts typing and masks characters with dots or asterisks.', actual: '', status: 'Not Executed' },
  { testId: 'TC004', description: 'Verify Sign in button is enabled only after entering valid credentials.', expected: 'Sign in button is available and clickable after entering email and password.', actual: '', status: 'Not Executed' },
  { testId: 'TC005', description: 'Verify login form contains email, password, sign in button, and remember me checkbox.', expected: 'All required login fields and controls are present and visible on the page.', actual: '', status: 'Not Executed' },
  { testId: 'TC006', description: 'Verify Forgot your password link works and navigates to recovery page.', expected: 'Clicking the forgot password link takes user to the password recovery screen.', actual: '', status: 'Not Executed' },
  { testId: 'TC007', description: 'Verify validation message when email is missing on login submission.', expected: 'An error is shown stating that email is required and login is prevented.', actual: '', status: 'Not Executed' },
  { testId: 'TC008', description: 'Verify validation message when password is missing on login submission.', expected: 'An error is shown stating that password is required and login is prevented.', actual: '', status: 'Not Executed' },
  { testId: 'TC009', description: 'Verify Create an account section accepts a valid email for account creation.', expected: 'The create account email field accepts input and proceeds to account creation when submitted.', actual: '', status: 'Not Executed' },
  { testId: 'TC010', description: 'Verify page footer or help text is displayed near the login form area.', expected: 'Relevant login help text or footer is visible and correctly positioned around the form.', actual: '', status: 'Not Executed' }
];
rows.forEach(row => sheet.addRow(row));
await workbook.xlsx.writeFile(`${dir}/automationpractice_login_testcases.xlsx`);
console.log('Created testcaseData/automationpractice_login_testcases.xlsx');
