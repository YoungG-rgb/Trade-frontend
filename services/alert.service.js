import { Subject } from 'rxjs';

export const alertService = {
    success,
    error,
    alert
};

export const AlertType = {
    Success: 'Success',
    Error: 'Error',
};

const alertSubject = new Subject();
const defaultId = 'default-alert';


const options = {
    autoClose: true,
    keepAfterRouteChange: false
}

function success(message) {
    alert({ ...options, type: AlertType.Success, message });
}

function error(message) {
    alert({ ...options, type: AlertType.Error, message });
}

function alert(alert) {
    alert.id = alert.id || defaultId;
    alert.autoClose = (alert.autoClose === undefined ? true : alert.autoClose);
    alertSubject.next(alert);
}