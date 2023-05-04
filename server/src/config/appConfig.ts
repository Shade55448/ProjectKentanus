class AppConfig {
    port: number;
    host: string;
    dbUri: string;
    jwtSecret: string;

    constructor() {
        this.port = parseInt(process.env.PORT, 10) || 8080;
        this.host = process.env.HOST || "localhost";
        this.dbUri = process.env.DB_URI || "mongodb://localhost:27012/kentanus";
        this.jwtSecret = process.env.JWT_SECRET || "DEFAULT_SECRET";
    }
}

export default new AppConfig();