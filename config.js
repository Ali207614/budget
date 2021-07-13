const PORT = process.env.PORT || 4000
const host = 'localhost'

const pgConfig = {
   connectionString:"postgres://eteeuufj:2OzZa3asPd_odOF6lpScZKJewSaxoD-Z@batyr.db.elephantsql.com/eteeuufj"
}

module.exports = {
    pgConfig,
    PORT ,
    host
}