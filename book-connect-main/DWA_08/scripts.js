// modules/BookSearchApp.js

import { books, authors, genres, BOOKS_PER_PAGE } from './data.js';
import { html } from './view.js';
import { BookPreviews } from './BookPreviews.js';
import { Search } from './Search.js';
import { Themes } from './Themes.js';
import { Utils } from './Utils.js';
import { BookSummary } from './BookSummary.js';

export class BookSearchApp {
  constructor() {
    this.matches = books;
    this.page = 1;
    this.bookPreviews = new BookPreviews(BOOKS_PER_PAGE);
    this.search = new Search(authors, genres);
    this.themes = new Themes();
    this.utils = new Utils();
    this.bookSummary = new BookSummary();
  }

  initialize() {
    this.setupEventListeners();
    this.populateInitialBookPreviews();
    this.createOptions();
    this.updateShowMoreButton();
  }

  setupEventListeners() {
    html.search.cancel.addEventListener('click', () => {
      this.utils.toggleOverlay(html.search.overlay);
    });

    // Add event listeners for other elements...
  }

  populateInitialBookPreviews() {
    const initialBooksDisplayed = this.bookPreviews.createBookPreview(
      this.matches,
      0
    );
    this.bookPreviews.createBookPreviewsButtons(initialBooksDisplayed);
  }

  createOptions() {
    const genreHtml = this.search.createOptions(genres, 'All Genres');
    const authorsHtml = this.search.createOptions(authors, 'All Authors');

    html.search.genres?.appendChild(genreHtml);
    html.search.authors?.appendChild(authorsHtml);
  }

  updateShowMoreButton() {
    this.bookPreviews.updateShowMoreButton(this.matches);
  }

  // Implement other methods...
}// modules/BookSearchApp.js

import { books, authors, genres, BOOKS_PER_PAGE } from './data.js';
import { html } from './view.js';
import { BookPreviews } from './BookPreviews.js';
import { Search } from './Search.js';
import { Themes } from './Themes.js';
import { Utils } from './Utils.js';
import { BookSummary } from './BookSummary.js';

export class BookSearchApp {
  constructor() {
    this.matches = books;
    this.page = 1;
    this.bookPreviews = new BookPreviews(BOOKS_PER_PAGE);
    this.search = new Search(authors, genres);
    this.themes = new Themes();
    this.utils = new Utils();
    this.bookSummary = new BookSummary();
  }

  initialize() {
    this.setupEventListeners();
    this.populateInitialBookPreviews();
    this.createOptions();
    this.updateShowMoreButton();
  }

  setupEventListeners() {
    html.search.cancel.addEventListener('click', () => {
      this.utils.toggleOverlay(html.search.overlay);
    });

    // Add event listeners for other elements...
  }

  populateInitialBookPreviews() {
    const initialBooksDisplayed = this.bookPreviews.createBookPreview(
      this.matches,
      0
    );
    this.bookPreviews.createBookPreviewsButtons(initialBooksDisplayed);
  }

  createOptions() {
    const genreHtml = this.search.createOptions(genres, 'All Genres');
    const authorsHtml = this.search.createOptions(authors, 'All Authors');

    html.search.genres?.appendChild(genreHtml);
    html.search.authors?.appendChild(authorsHtml);
  }

  updateShowMoreButton() {
    this.bookPreviews.updateShowMoreButton(this.matches);
  }

  // Implement other methods...
}

