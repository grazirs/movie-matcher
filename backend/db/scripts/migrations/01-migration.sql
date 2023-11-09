CREATE DATABASE movie_matcher;


CREATE TABLE sessions (
    id varchar(255) UNIQUE NOT NULL PRIMARY KEY,
    active boolean DEFAULT TRUE,
    match_found boolean DEFAULT FALSE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
); 


CREATE TABLE session_codes (
    id varchar(255) UNIQUE NOT NULL PRIMARY KEY,
    access_code varchar(255) UNIQUE NOT NULL,
    active boolean DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    session_id varchar(255) REFERENCES sessions(id) ON DELETE CASCADE
); 


