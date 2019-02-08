const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/photos', (err) => {
  if (err) {
    return console.error(err, 'Error to connect');
  }
  return console.log('DB connected');
});


const photoSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  links: Array,
});

const Photo = mongoose.model('Photo', photoSchema);

// allLinks is created to hold all associate links with the restaurant
// allLink will be use to randomize image links for fake restaurant datas
const allLinks = [
  'https://zagat-photos.imgix.net/ChIJa52AEWaHhYARNkV1i0pn-S4/690a8bea7e34f28beb366a08ef0f40f9.jpg',
  'https://zagat-photos.imgix.net/ChIJa52AEWaHhYARNkV1i0pn-S4/ededd3057b3c47154a665c71c07b9203.jpg',
  'https://zagat-photos.imgix.net/ChIJa52AEWaHhYARNkV1i0pn-S4/54efe4d311c957893cb90325e9258b8e.jpg',
  'https://zagat-photos.imgix.net/ChIJa52AEWaHhYARNkV1i0pn-S4/06bc8870d87a6058cbdfc8d56252c3f2.jpg',
  'https://zagat-photos.imgix.net/ChIJa52AEWaHhYARNkV1i0pn-S4/f813c0e2f3ac447924b278217fb132d9.jpg',
  'https://zagat-photos.imgix.net/ChIJa52AEWaHhYARNkV1i0pn-S4/aea7328453a4ff5c19950b3eead347f5.jpg',
  'https://zagat-photos.imgix.net/ChIJa52AEWaHhYARNkV1i0pn-S4/72198efa97bc89148f9339e5d46e668b.jpg',
  'https://zagat-photos.imgix.net/ChIJa52AEWaHhYARNkV1i0pn-S4/cd650589494bd8aa92a86ac366e072cd.jpg',
  'https://zagat-photos.imgix.net/ChIJa52AEWaHhYARNkV1i0pn-S4/eb3fee290f683f9645be83df2cd18c74.jpg',
  'https://zagat-photos.imgix.net/ChIJa52AEWaHhYARNkV1i0pn-S4/a5fd69e410e0e616750f405edb50e583.jpg',
  'https://zagat-photos.imgix.net/ChIJa52AEWaHhYARNkV1i0pn-S4/9c66b36c39a225f955dfd25c1a4254e0.jpg',
  'https://zagat-photos.imgix.net/ChIJa52AEWaHhYARNkV1i0pn-S4/976a23aa2d446e14f1a4f427fadf3ae9.jpg',
];

let count = 2;

const saveMainOne = () => {
  const links = [];
  for (let i = 1; i <= allLinks.length; i++) {
    links.push({ i: allLinks[i] });
  }
  const MainPhoto = new Photo({
    id: 1,
    links,
  });
  MainPhoto.save();
};

module.exports.saveMainOne = saveMainOne;
