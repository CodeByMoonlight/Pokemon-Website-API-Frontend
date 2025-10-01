# Pokemon Website

## Table of Contents

- [Description](#description)
- [Frameworks and Technologies](#frameworks-and-technologies)
- [Routes](#routes)
- [Features](#features)
- [How to Run](#how-to-run)
- [Acknowledgments](#acknowledgments)
- [Academic Context](#academic-context)
- [Contributors](#contributors)
- [License](#license)

## Description

This Pokemon Website is a full-stack application that allows users to explore Pokemon details, manage custom stories for each Pokemon, and interact with the PokeAPI. The application provides a seamless user experience with a modern interface and robust backend functionality.

## Frameworks and Technologies

- **Frontend**: React
  - React is used to build the dynamic and interactive user interface. It manages state efficiently and provides a smooth user experience.

## Routes

- **/**
  - The homepage displaying a list of Pokemon. Users can browse through the list and select a Pokemon to view its details.
- **/view/:pokemonId**
  - Displays detailed information about a specific Pokemon, including its stats, abilities, and custom story (if available).
- **/memory-game**
  - A fun memory game featuring Pokemon cards. Users can test their memory skills by matching pairs of Pokemon.
- **/pokedex**
  - Redirects to the first page of the Pokedex.
- **/pokedex/page/:pageNumber**
  - Displays a paginated view of the Pokedex, allowing users to navigate through pages to explore all Pokemon.

## Features

- **Pokemon Details**: View detailed information about each Pokemon, including stats, abilities, and types.
- **Integration with PokeAPI**: Fetches real-time data about Pokemon from the PokeAPI.
- **Responsive Design**: Ensures the website is accessible on various devices.

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/CodeByMoonlight/Pokemon-API-Website-Frontend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Pokemon-API-Website
   ```
3. Install dependencies for both the client and server:

   ```bash
   cd client && npm install

   ```

4. Start the development servers:
   - For the client:
     ```bash
     npm run dev
     ```
5. Open the application in your browser at `http://localhost:5173/`.

## Acknowledgments

- **PokeAPI**: For providing the Pokemon data used in this application.
- **React**: For the powerful frontend framework.

## License

This project is licensed under the MIT License.

## Academic Context

This website is a project developed for the ICE 415 subject. It demonstrates the integration of modern web development frameworks and APIs to create a functional and interactive application.

## Contributors

- **Created By**:
  - Alijah Valle
  - Abby Gale Señeres
