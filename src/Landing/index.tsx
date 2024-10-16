import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ReactDOM from "react-dom/client";
import LandingNavigation from "./Navigation";
import App from "../App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Landing() {
    return (
        <div>
            <h1>Shuyuan Liu</h1>
            <h2>SEC 01</h2>
            <LandingNavigation />
        </div>
    );
}