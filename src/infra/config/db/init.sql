-- Arquivo init.sql
DROP USER IF EXISTS 'bdUser'@'%';
CREATE USER IF NOT EXISTS 'bdUser'@'%' IDENTIFIED BY 'senhaUser';
GRANT ALL PRIVILEGES ON *.* TO 'bdUser'@'%';
FLUSH PRIVILEGES;