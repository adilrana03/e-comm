const app = require('./app');
const ConnectDatabase = require("./config/database")


ConnectDatabase();

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost${PORT}`);
})