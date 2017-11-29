CREATE TABLE dbo.appConfig (
  appConfigId INT IDENTITY (1, 1) NOT NULL
    CONSTRAINT pk_appConfig_appConfigId PRIMARY KEY,

  configName  VARCHAR(100)        NOT NULL,
  configValue VARCHAR(255)        NOT NULL,

  CONSTRAINT uq_appConfig_configName UNIQUE (configName)
);