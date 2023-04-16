"use client";

import React from "react";
import styles from "./AdminDetails.module.css";

interface AdminProps {
  name: string;
  role:string;
  assets: number;
  date: string;
  children?: React.ReactNode; // 👈️ for demo purposes
}

function AdminDetails(props: AdminProps) {
  return (
    <>
      <div className={styles.card}>
        <div>
          <h2>{props.name}</h2>
          <h5>{props.role}</h5>
        </div>
        <div>
          <p>
            Your users added <a href="#">{props.assets} new assets</a> since
            your last login on {props.date}
          </p>
        </div>
      </div>
    </>
  );
}

export default AdminDetails;
