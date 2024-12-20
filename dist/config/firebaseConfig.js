"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
// const serviceAccount = {
//   apiKey: process.env.APIKEY,
//   authDomain: process.env.AUTHDOMAIN,
//   projectId: process.env.PROJECTID,
//   storageBucket: process.env.STORAGEBUCKET,
//   messagingSenderId: process.env.MESSAGINGSENDERID,
//   appId: process.env.APIID,
//   measurementId: process.env.MEASUREMENTID,
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyCHXx4ahOLD3JjZpbIQ649elAfuPvY5mMI",
//   authDomain: "ebuddy-firebase-81b3b.firebaseapp.com",
//   projectId: "ebuddy-firebase-81b3b",
//   storageBucket: "ebuddy-firebase-81b3b.firebasestorage.app",
//   messagingSenderId: "25099941356",
//   appId: "1:25099941356:web:cecba0798dc807bf197cc9",
//   measurementId: "G-TPPGHTD4ZQ",
//   type: "service_account",
//   project_id: "ebuddy-firebase-81b3b",
//   private_key_id: "a895980824ed4ea1aa7c929d7768b01ff94736bd",
//   private_key:
//     "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDGVtw3EyGHAzV6\n34+F83H/PPU3NDuYTSS+KzBk4q6/5io0G+skhKuCpMU41MS0hmYnrQluPe5kPqqW\nGA3/CU8ohn4ucHDtlpM/J4Ix/Ast2AVae4VVZhKu/Z4QPbQSEPjDcNU+NeT9WTBO\n/x7OfXy7tcOEMLktZTyBFrTtx8RmRK9U529cZHCLoUq457Zx4yaxuQaYN9gJssbJ\nSyEWZBnvLCyl/fhp4Ae6e8Zp/SVG4KdhwCpMJ3k/sEgUmKfBZT9Buk6UT1OXV0r8\nrXj+hgTUlTOSBwy1cdapFlhrIiA0DZXE2VKsjNXZtIqCt25E9EICZ9CyRAk0X2kr\nndtqBfsnAgMBAAECggEAO5t/M04clWbxe6wUhj1T1VGMoLqh7nPAxyZTtP4rZqDV\nrjN1x9PXd7vtSdcoBtkdem8WlnsmWho7SkCQdEVn9NX2th400jKerixBhKQq9+wk\nL71PpQq4Mr8l8duZcpSHLrWKYNfxqfJUAmnJ6GTuR7uotuGtxWbXeDRKy+ttqw4R\nd1piW5i0UhOH/Pk5TDG7sUBJDn9fUu1C8h6adOOsTLjKCH88X4WkhhOPBwjcH3RP\nmpZygghSxYfLDgNWCqODBRQ2sloaRxpwpfQ8kPhoNREwyBmqUGMSGTB/IId0BM0p\nTPihYxU1qLutnRHEjwjsd2Cz2gaZt+C2AYnEd4oDgQKBgQD1IqjIeKmf5AaMuGjL\npN/nmIH+LskGpU07f+lWlthNEBXuflBJtFRbM5sFPgxdtICwqwe1qEZLj7loie5G\ns0p7GmPYx/6eg1HrpIOPv+WxO1W/THR+gwIAFEvO0VynTKOeslrpQ4y8XMJdCbGa\ndV9tr+1V3/Eb1qqbZlCyMaOdCwKBgQDPIT7xDc1THTVVmVTT2s19crDDl7LZeQd4\nKYs4QZkYJe95aDvdTv6fsF12//VQTVN/kQA9a5bfutlVy8c7pf/4PX7cB5Lh+2uW\nqCpLVaUyxguYi0/EwpZ8lSxhCPHqtRJwLoseZFbp5EkF2LFfwhi8Md2H/dwh//z+\nZ4ORmYWT1QKBgQCgCJWJ8wRCJxqDieyYbjXiu3S6HY8NsKMAIhySc/4YKVU4EuyV\ngY3E0Kb2wDBQiIOvUqjA1m+16smPTuTo8SnBvlPK9Z3rnC3CGe/ty8jHcMYlEmPH\nJ/4JUTbAeXv0mJsFAslJGdlqK2CUXry86r13HXBjLMT6eKV+uEgcXT3ESwKBgQCg\n9UTkLcWRAPGhQzYYK7/j7GxQkmH5fYPAbQgy/0bo7RHbVpSuteRIU9VN1Dnd3Tk1\nuIhnMmRcF+csNN7uC2GOlrsuYPRTh/1jZer3/+YQPrZkJF4omM44ofOKtFjJ+0wI\nwSJ6y55+w1e7o1izATIXjOiJ9UxLX5JKYEZtrs+OwQKBgH21KHl5bcvDxpKufgch\nPwe5M+KXUW3/R7LMfvApu5TOdALH1qeN+LCpSniTmUClxNr5s4z16SDkTfQJOBdM\nLNoOmdh0I7uEKCaOChA7DAVJZgmZmBScfp+YLOHRYzGUF5taJtoIcCysGy21zIK6\nM3xcqXMJ+FiLWduHxmqpGcdX\n-----END PRIVATE KEY-----\n",
//   client_email:
//     "firebase-adminsdk-m6vva@ebuddy-firebase-81b3b.iam.gserviceaccount.com",
//   client_id: "102192352129072173185",
//   auth_uri: "https://accounts.google.com/o/oauth2/auth",
//   token_uri: "https://oauth2.googleapis.com/token",
//   auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
//   client_x509_cert_url:
//     "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-m6vva%40ebuddy-firebase-81b3b.iam.gserviceaccount.com",
//   universe_domain: "googleapis.com",
// };
const path_1 = __importDefault(require("path"));
// Load the service account key file
const serviceAccount = require(path_1.default.resolve(__dirname, '../firebase.json'));
if (!firebase_admin_1.default.apps.length) {
    firebase_admin_1.default.initializeApp({
        credential: firebase_admin_1.default.credential.cert(serviceAccount)
    });
}
exports.db = firebase_admin_1.default.firestore();
