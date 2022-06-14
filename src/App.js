import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './firebase';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Container, Carousel } from 'react-bootstrap';
import gambar from './img/gambar.jpg';
import gambar2 from './img/gambar2.jpeg';
class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('mahasiswa');
    this.unsubscribe = null;
    this.state = {
      mahasiswa: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const mahasiswa = [];
    querySnapshot.forEach((doc) => {
      const { nim, nama, alamat, nohp } = doc.data();
      mahasiswa.push({
        key: doc.id,
        doc, // DocumentSnapshot
        nim,
        nama,
        alamat,
        nohp,
      });
    });
    this.setState({
      mahasiswa
    });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div id="carouselExampleSlidesOnly" class="carousel" data-ride="carousel">
        <div class="row">
          <div class="col-md-12">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={gambar}
                alt="First slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={gambar}
                alt="Second slide"
              />

              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={gambar2}
                alt="Third slide"
              />

              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>    
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-body">
            <h4><Link to="/create" class="btn btn-primary">Tambah Mahasiswa</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Nim</th>
                  <th>Nama</th>
                  <th>Alamat</th>
                  <th>No HP</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mahasiswa.map(mahasiswa =>
                  <tr>
                    <td><Link to={`/show/${mahasiswa.key}`}>{mahasiswa.nim}</Link></td>
                    <td>{mahasiswa.nama}</td>
                    <td>{mahasiswa.alamat}</td>
                    <td>{mahasiswa.nohp}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
