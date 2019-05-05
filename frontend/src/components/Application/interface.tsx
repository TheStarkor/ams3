import { ValueType } from 'react-select/lib/types';
import { number } from 'prop-types';

// Interface storing Application Form Informations
export interface IApplicationForm {
    // Personal Informations
    nameFirst?: string;
    nameLast?: string;
    sex?: string;
    birthDate?: string;
    nationality?: string;
    school?: string;
    major?: string;

    // Contact
    phoneNumber?: string;
    notificationEmail?: string;

    essay?: string;

    // Agreements, supports, and other optional stuffs
    groupState: boolean;
    groupName?: string;
    provisionAgreement: boolean;
    visaSupport: boolean;
    financialAid: boolean;
    dormUse: boolean;
    prevParticipation: boolean;

    channel?: string;
    otherChannel?: string;

    paymentCheck: boolean;

    // Form maintainence
    lastUpdate?: string;
}

// Interface storing Apllication Component State
export interface IApplicationState {
    essayCount: number;
}

export interface IApplicationOptions {
    countries: JSX.Element[];
    genders: JSX.Element[];
    channels: JSX.Element[];
    ages: JSX.Element[];
}