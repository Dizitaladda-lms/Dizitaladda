import mysql from "mysql2/promise";

let pool;
const auxiliaryPools = new Map();

export function getDatabase() {
  if (!process.env.DB_HOST || !process.env.DB_NAME || !process.env.DB_USER) {
    throw new Error("Database configuration is missing. Set DB_HOST, DB_NAME, DB_USER and DB_PASSWORD.");
  }
  pool ??= mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 3306),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD || "",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    charset: "utf8mb4",
  });
  return pool;
}

export function getAuxiliaryDatabase(prefix, fallbackPrefix = "DB") {
  const value = (name) => process.env[`${prefix}_${name}`] || process.env[`${fallbackPrefix}_${name}`];
  const host = value("HOST"), database = value("NAME"), user = value("USER");
  if (!host || !database || !user) throw new Error(`${prefix}_HOST, ${prefix}_NAME and ${prefix}_USER are required.`);
  if (!auxiliaryPools.has(prefix)) {
    auxiliaryPools.set(prefix, mysql.createPool({
      host,
      port: Number(value("PORT") || 3306),
      database,
      user,
      password: value("PASSWORD") || "",
      waitForConnections: true,
      connectionLimit: 6,
      queueLimit: 0,
      charset: "utf8mb4",
    }));
  }
  return auxiliaryPools.get(prefix);
}

export const getBlogDatabase = () => getAuxiliaryDatabase("BLOG_DB");
export const getLegacyContentDatabase = () => getAuxiliaryDatabase("LEGACY_CONTENT_DB", "BLOG_DB");
export const getAffiliateDatabase = () => getAuxiliaryDatabase("AFFILIATE_DB");
export const getStaffDatabase = () => getAuxiliaryDatabase("STAFF_DB");
export const getManagementDatabase = () => getAuxiliaryDatabase("MGMT_DB");
export const getSchoolDatabase = () => getAuxiliaryDatabase("SCHOOL_DB");
export const getLeadDatabase = () => getAuxiliaryDatabase("LEADS_DB");
export const getTestFormDatabase = () => getAuxiliaryDatabase("TEST_FORM_DB");
export const getScholarshipDatabase = () => getAuxiliaryDatabase("SCHOLARSHIP_DB");

export function safeError(error) {
  console.error("Database request failed:", error?.code || "unknown error");
  return new Response(JSON.stringify({ success: false, message: "The service is temporarily unavailable." }), {
    status: 503,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}
