import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  /** @type {import('./models/Blog.js').Blog[]} user info from the database*/
  blogs: [],
  /** @type {import('./models/Blog.js').Blog} user info from the database*/
  blog: null,

  likerProfiles: [],
  mapboxgl: [],

  /** @type {import('./models/BlogPicture.js').BlogPicture[]} user info from the database*/

  blogPictures: []

})

