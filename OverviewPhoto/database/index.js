const mongoose = require('mongoose');


mongoose.connect('mongodb://172.17.0.3:27017/photos', (err) => {
  if (err) {
    return console.error(err, 'Error to connect');
  }
  return console.log('DB connected');
});

const photoSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  links: [
    {
      photoId: Number,
      photo_url: String,
    },
  ],
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
  'https://zagat-photos.imgix.net/ChIJa52AEWaHhYARNkV1i0pn-S4/cef7427c268db53e54b03ddabb627a0c.jpg',
  'https://zagat-photos.imgix.net/ChIJa52AEWaHhYARNkV1i0pn-S4/cd650589494bd8aa92a86ac366e072cd.jpg',
  'https://zagat-photos.imgix.net/ChIJa52AEWaHhYARNkV1i0pn-S4/eb3fee290f683f9645be83df2cd18c74.jpg',
  'https://zagat-photos.imgix.net/ChIJa52AEWaHhYARNkV1i0pn-S4/a5fd69e410e0e616750f405edb50e583.jpg',
  'https://zagat-photos.imgix.net/ChIJa52AEWaHhYARNkV1i0pn-S4/9c66b36c39a225f955dfd25c1a4254e0.jpg',
  'https://zagat-photos.imgix.net/ChIJa52AEWaHhYARNkV1i0pn-S4/976a23aa2d446e14f1a4f427fadf3ae9.jpg',
];

const saveMainOne = () => {
  const links = [];
  for (let i = 1; i <= allLinks.length; i++) {
    const photo = {};
    photo.photoId = i;
    photo.photo_url = allLinks[i - 1];
    links.push(photo);
  }
  const MainPhoto = new Photo({
    id: 1,
    name: 'Izakaya Sozai',
    links,
  });
  MainPhoto.save((err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('SAVED FIRST DATA');
    }
  });
};


const saveFakeData = () => {
  const allPromises = [];
  for (let id = 2; id <= 100; id++) {
    const randomPhotoNumber = Math.ceil(Math.random() * allLinks.length);
    const linkCollection = allLinks.slice(0, randomPhotoNumber);
    const links = [];
    for (let i = 1; i <= linkCollection.length; i++) {
      const photo = {};
      photo.photoId = i;
      photo.photo_url = allLinks[i - 1];
      links.push(photo);
    }
    const newPhoto = new Photo({
      id,
      name: `Fake Data ${id}`,
      links,
    });
    allPromises.push(newPhoto.save());
  }
  Promise.all(allPromises)
    .then(() => console.log('ALL DATA GENERATED'))
    .catch(err => console.error(err));
};

const findOne = (id, callback) => {
  Photo.findOne({ id },
    (err, data) => {
      if (err) callback(err);
      callback(null, data);
    });
};

saveMainOne();
saveFakeData();
module.exports.findOne = findOne;
