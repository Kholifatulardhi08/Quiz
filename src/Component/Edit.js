import React, { Component } from 'react';
import firebase from '../firebase';
import { Link } from 'react-router-dom';

class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: '',
            nim: '',
            nama: '',
            alamat: '',
            nohp : ''
        };
    }

    componentDidMount() {
        const ref = firebase.firestore().collection('mahasiswa').doc(this.props.match.params.id);
        ref.get().then((doc) => {
            if (doc.exists) {
                const mahasiswa = doc.data();
                this.setState({
                    key: doc.id,
                    nim: mahasiswa.nim,
                    nama: mahasiswa.nama,
                    alamat : mahasiswa.alamat,
                    nohp : mahasiswa.nohp
                });
            } else {
                console.log("No such document!");
            }
        });
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({ mahasiswa: state });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { nim, nama, alamat, nohp } = this.state;

        const updateRef = firebase.firestore().collection('mahasiswa').doc(this.state.key);
        updateRef.set({
            nim,
            nama,
            alamat,
            nohp
        }).then((docRef) => {
            this.setState({
                key: '',
                nim: '',
                nama: '',
                alamat: '',
                nohp: ''
            });
            this.props.history.push("/show/" + this.props.match.params.id)
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }

    render() {
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            Edit Mahasiswa
                        </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link to={`/show/${this.state.key}`} class="btn btn-primary">List Mahasiswa</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="nim">Nim:</label>
                                <input type="text" class="form-control" name="nim" value={this.state.title} onChange={this.onChange} placeholder="Nim" />
                            </div>
                            <div class="form-group">
                                <label for="nama">Nama:</label>
                                <input type="text" class="form-control" name="nama" value={this.state.title} onChange={this.onChange} placeholder="Nama" />
                            </div>
                            <div class="form-group">
                                <label for="alamat">Alamat:</label>
                                <input type="text" class="form-control" name="alamat" value={this.state.body} onChange={this.onChange} placeholder="Alamat" />
                            </div>
                            <div class="form-group">
                                <label for="nohp">No Hp:</label>
                                <input type="text" class="form-control" name="nohp" value={this.state.author} onChange={this.onChange} placeholder="Nohp" />
                            </div>
                            <button type="submit" class="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Edit;
