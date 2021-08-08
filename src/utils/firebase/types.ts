import firebase from "firebase/app";

// FIRESTORE
export type CollectionReference = firebase.firestore.CollectionReference;
export type DocumentReference = firebase.firestore.DocumentReference;
export type DocumentSnapshot = firebase.firestore.DocumentSnapshot;
export type DocumentData = firebase.firestore.DocumentData;
export type Query = firebase.firestore.Query;
export type QuerySnapshot = firebase.firestore.QuerySnapshot;
export type QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;

// AUTH
export type UserCredential = firebase.auth.UserCredential;
export type Auth = firebase.auth.Auth;
export type AuthCredential = firebase.auth.AuthCredential;
export type OAuthCredential = firebase.auth.OAuthCredential;
export type FirebaseUser = firebase.User;
export type FirebaseUserInfo = firebase.UserInfo;

// FIELDS
export type Timestamp = firebase.firestore.Timestamp;
