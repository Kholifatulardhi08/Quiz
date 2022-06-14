import React, { Component } from 'react';
import firebase from '../firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

    constructor() {
        super();
        this.ref = firebase.firestore().collection('mahasiswa');
        this.state = {
            nim: '',
            nama: '',
            alamat: '',
            nohp: '',
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { nim, nama, alamat, nohp } = this.state;

        this.ref.add({
            nim,
            nama,
            alamat,
            nohp
        }).then((docRef) => {
            this.setState({
                nim: '',
                nama: '',
                alamat: '',
                nohp : ''
            });
            this.props.history.push("/")
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }

    render() {
        const { nim, nama, alamat, nohp } = this.state;
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            Tambah Mahasiswa
                        </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link to="/" class="btn btn-primary">List Mahasiswa</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="nim">Nim:</label>
                                <input type="text" class="form-control" name="nim" value={nim} onChange={this.onChange} placeholder="Nim" />
                            </div>
                            <div class="form-group">
                                <label for="nama">Nim:</label>
                                <input type="text" class="form-control" name="nama" value={nama} onChange={this.onChange} placeholder="Nama" />
                            </div>
                            <div class="form-group">
                                <label for="alamat">Alamat:</label>
                                <textArea class="form-control" name="alamat" onChange={this.onChange} placeholder="Alamat" cols="80" rows="2">{alamat}</textArea>
                            </div>
                            <div class="form-group">
                                <label for="nohp">No Handphone:</label>
                                <input type="text" class="form-control" name="nohp" value={nohp} onChange={this.onChange} placeholder="No Handphone" />
                            </div>
                            <button type="submit" class="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;