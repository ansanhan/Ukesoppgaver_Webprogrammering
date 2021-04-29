CREATE TABLE Motorvogn (
                           id INTEGER AUTO_INCREMENT NOT NULL,
                           regnummer VARCHAR(25) NOT NULL,
                           merke VARCHAR(25) NOT NULL,
                           personnummer VARCHAR(25) NOT NULL,
                           navn VARCHAR(50) NOT NULL,
                           adresse VARCHAR(100) NOT NULL,
                           PRIMARY KEY (id)
);