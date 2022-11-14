// import moment from 'moment-timezone';

export const formatCurrency = (value) => {
    if (value) {
        let val = value;
        val = val ? parseFloat(val).toFixed(2) : 0.00;
        return val === 0 ? '₦0.00' : `₦${Number(val).toLocaleString('en-US')}`;
    }
    return '₦0.00';
};

export const concealEmail = (email = '') => email.replace(/(?!^).(?=[^@]+@)/g, '*');

export const concealValue = (value = '') => (value ? value.replace(/\w/g, '*') : '');

// export const logger = (...logs) => (process.env.NODE_ENV === 'development' ? console.log(...logs, `(Log time - ${moment().format('LLL')})`) : undefined);

export const format2Digits = (num) => {
    if (typeof num !== 'number' || Number.isNaN(num)) return 0;

    return num.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) || 0;
};

export const formatFileUrl = (path) => {
    if (path) return `${process.env.REACT_APP_API_BASE_URL}/${path}`;
    return null;
};

export const toggleScroll = () => {
    const overlays = document.querySelectorAll('.overlay');

    if (overlays.length > 0) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
};

export const formatStatus = (status) => {
    switch (status) {
        case 'pending': return 'Pending';
        case 'parked': return 'Parked';
        case 'valid': return 'Valid';
        case 'approved': return 'Approved';
        case 'referred': return 'Referred';
        case 'rejected': return 'Rejected';
        case 'in-review': return 'In Review';
        case 'in-progress': return 'In Progress';
        case 'implemented': return 'Implemented';

        case 'open': return 'Open';
        case 'closed': return 'Closed';

        case 'published': return 'Published';
        case 'unpublished': return 'Not Published';

        default: return status;
    }
};
