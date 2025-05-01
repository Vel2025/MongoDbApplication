A RESTful API for managing country data, built with Node.js, Express, MongoDB, and Mongoose. The API allows users to create, read, update, and delete information about countries, continents, and languages.

## API Routes

### Countries
- `GET /api/countries` - Get all countries
- `GET /api/countries/:id` - Get a specific country
- `POST /api/countries` - Create a new country
    Example: {
  "name": "France",
  "continent": "507f1f77bcf86cd799439011",
  "capital": "Paris",
  "population": 67391582,
  "languages": ["507f1f77bcf86cd799439012", "507f1f77bcf86cd799439013"]
}
- `PATCH /api/countries/:id` - Update a country
- `DELETE /api/countries/:id` - Delete a country
- `POST /api/countries/test-validation` - Test validation rules

### Continents
- `GET /api/continents` - Get all continents
- `POST /api/continents` - Create a new continent

### Languages
- `GET /api/languages` - Get all languages
- `POST /api/languages` - Create a new language

## Data Model
- **Country**: name (String, unique), continent (ObjectId ref Continent), capital (String), population (Number), languages (Array of ObjectId ref Language)
- **Continent**: name (String, unique)
- **Language**: name (String, unique)

## Features
- MongoDB indexes on frequently queried fields (name, continent)
- Database-side validation for country data (e.g., whole number population)
- Mongoose schema validation
- Sample data population (6 countries, 6 continents, 7 languages)
- Proper error handling
- ES Modules syntax
- Organized code structure

## Notes
- The application uses Mongoose for additional application-side validation
- Indexes are implemented for optimal query performance

