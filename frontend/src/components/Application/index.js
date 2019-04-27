import React from "react";

import { withAuthorization, withEmailVerification } from "../Session";
import { withFirebase } from "../Firebase";

import { compose } from "recompose";

import { genderOptions, channelOptions, schoolOptions } from "../../constants/applicatonOptions";
import countryList from 'react-select-country-list';

const INITIAL_STATE = {
    provision: false,
    nameFirst: "",
    nameLast: "",
    notification_email: "",
    school: "",
    major: "",
    essay: "",
    age: 0,
    sex: "",
    nationality: "",
    groupState: false,
    groupName: "",
    visa: false,
    channel: "",
    financialAid: false,
    prevParticipation: false,
}

const range = (start, end) => {
    const length = end - start;
    return Array.from({ length }, (_, i) => start + i);
}

class ApplicationBase extends React.Component {
    constructor(props) {
        super(props);

        this.options = {
            countries: countryList().getData().map(element => (
                <option value={element.label}>{element.label}</option>
            )),
            schools: schoolOptions.map(element => (
                <option value={element.name}>({element.country_code}) {element.name}</option>
            )),
            genders: genderOptions.map(element => (
                <option value={element.text}>{element.text}</option>
            )),
            channels: channelOptions.map(element => (
                <option value={element.text}>{element.text}</option>
            )),
            ages: range(16, 36 + 1).map(element => (
                <option value={element}>{element}</option>
            ))
        }

        this.state = {
            ...INITIAL_STATE
        };

        this.props.firebase
            .userApplication(this.props.firebase.auth.currentUser.uid)
            .once('value', snapshot => {
                const data = snapshot.val();
                this.setState({
                    ...data
                })
            })
    }

    validateEmail = email => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    onChange = event => {
        const target = event.target;
        const name = target.name;
        let value = target.value;
        if (target.type === "checkbox") {
            value = target.checked
        }
        this.setState({
            [name]: value
        });
    }
    
    onSubmit = event => {
        const uid = this.props.firebase.auth.currentUser.uid;
        this.props.firebase.userApplication(uid).set({
            ...this.state
        })
    }

    isValidState = () => {
        let valid = true
        return valid;
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="app-name">
                    <div className="app-name-first">
                        First Name
                        <input
                            name="nameFirst"
                            value={this.state.nameFirst}
                            onChange={this.onChange}
                            type="text"
                            placeholder="First Name"
                        />
                    </div>
                    <div className="app-name-last">
                        Last Name
                        <input
                            name="nameLast"
                            value={this.state.nameLast}
                            onChange={this.onChange}
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>
                </div>
                <div className="app-nationality">
                    <label htmlFor="app-nationality-select">Nationality</label>
                    <select
                        className="app-nationality-select"
                        name="nationality"
                        value={this.state.nationality}
                        data-live-search="true"
                        onChange={this.onChange} >
                        <option value="" disabled selected>Select your country</option>
                        {this.options.countries}
                    </select>
                </div>
                <div className="app-school">
                    <label htmlFor="app-school-select">School</label>
                    <select
                        name="school"
                        value={this.state.school}
                        onChange={this.onChange}
                        className="app-school-select" >
                        <option value="" disabled selected>Select your school</option>
                        {this.options.schools}
                    </select>
                </div>
                <div className="app-major">
                    Major
                    <input
                        name="major"
                        value={this.state.major}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Broomstick Engineering"
                    />
                </div>
                <div className="app-sex">
                    <label htmlFor="app-sex-select">Sex</label>
                    <select
                        name="sex"
                        className="app-sex-select"
                        onChange={this.onChange}
                        value={this.state.sex} >
                        <option value="" disabled selected>Your Sex</option>
                        {this.options.genders}
                    </select>
                </div>
                <div className="app-age">
                    <label htmlFor="app-age-select">Age</label>
                    <select
                        name="age"
                        className="app-age-select"
                        onChange={this.onChange}
                        value={this.state.age}>
                        {this.options.ages}
                    </select>
                </div>
                <div className="app-group-check-box">
                    <input
                        name="groupState"
                        className="app-group-check"
                        type="checkbox"
                        onChange={this.onChange}
                        value={this.state.groupState} />
                    <label className="app-group-check-label" htmlFor="app-group-check">
                        Are you participating in a group?
                    </label>
                </div>
                <div className="app-group-name">
                    Group Name
                    <input
                        name="groupName"
                        value={this.state.groupName}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Your Group Name"
                    />
                </div>
                <div className="app-email">
                    <label htmlFor="app-email-select">Email</label>
                    <input
                        className="app-email-select"
                        name="notification_email"
                        value={this.state.notification_email}
                        onChange={this.onChange}
                        placeholder="Email address to get notified from ICISTS"
                        type="email"></input>
                </div>
                <hr/>
                <div className="app-provision">
                    <input
                        name="provision"
                        className="app-provision-check"
                        onChange={this.onChange}
                        type="checkbox"
                        value={this.state.provision} />
                    <label className="app-provision-check-label" htmlFor="app-provision-check">
                        Do you agree with the provision?
                    </label>
                </div>
                <div className="app-financial-aid">
                    <input
                        name="financialAid"
                        className="app-financial-aid-check"
                        onChange={this.onChange}
                        type="checkbox"
                        value={this.state.financialAid} />
                    <label className="app-financial-aid-check-label" htmlFor="app-provision-check">
                        Do you need financial aid?
                    </label>
                </div>
                <div className="app-prev-participation">
                    <input
                        name="prevParticipation"
                        className="app-prev-participation-check"
                        onChange={this.onChange}
                        type="checkbox"
                        value={this.state.prevParticipation} />
                    <label className="app-prev-participation-check" htmlFor="app-prev-participation-check">
                        Have you participated ICISTS before?
                    </label>
                </div>
                <hr/>
                <div className="app-essay">
                    Essay
                    <input
                        className="app-essay-input"
                        name="essay"
                        type="textarea"
                        onChange={this.onChange}
                        value={this.state.essay} >
                    </input>
                </div>
                <hr/>
                <div className="app-channel">
                    <label htmlFor="app-channel-select">
                        How did you know about ICISTS?
                    </label>
                    <select
                        name="channel"
                        className="app-channel-select"
                        onChange={this.onChange}
                        value={this.state.channel} >
                        <option value="" disabled selected>I've heard about ICISTS from...</option>
                        {this.options.channels}
                    </select>
                </div>
                <div className="app-save">
                    <button type="submit">
                        Save
                    </button>
                </div>
            </form>
        );
    }
}

const condition = authUser => authUser != null;

const Application = compose(
    withEmailVerification,
    withAuthorization(condition),
    withFirebase
)(ApplicationBase);

export default Application;