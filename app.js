function copyCurrentAddress() {
    if (document.getElementById('same_as_current').checked) {
        document.getElementById('correspondence_village_mohalla').value = document.getElementById('current_village_mohalla').value;
        document.getElementById('correspondence_post_office').value = document.getElementById('current_post_office').value;
        document.getElementById('correspondence_police_station').value = document.getElementById('current_police_station').value;
        document.getElementById('correspondence_district').value = document.getElementById('current_district').value;
        document.getElementById('correspondence_pincode').value = document.getElementById('current_pincode').value;
    } else {
        document.getElementById('correspondence_village_mohalla').value = '';
        document.getElementById('correspondence_post_office').value = '';
        document.getElementById('correspondence_police_station').value = '';
        document.getElementById('correspondence_district').value = '';
        document.getElementById('correspondence_pincode').value = '';
    }
}

function copyCoApplicantAddress() {
    if (document.getElementById('same_as_coApplicant').checked) {
        document.getElementById('coApplicant_correspondence_village_mohalla').value = document.getElementById('coApplicant_village_mohalla').value;
        document.getElementById('coApplicant_correspondence_post_office').value = document.getElementById('coApplicant_post_office').value;
        document.getElementById('coApplicant_correspondence_police_station').value = document.getElementById('coApplicant_police_station').value;
        document.getElementById('coApplicant_correspondence_district').value = document.getElementById('coApplicant_district').value;
        document.getElementById('coApplicant_correspondence_pincode').value = document.getElementById('coApplicant_pincode').value;
    } else {
        document.getElementById('coApplicant_correspondence_village_mohalla').value = '';
        document.getElementById('coApplicant_correspondence_post_office').value = '';
        document.getElementById('coApplicant_correspondence_police_station').value = '';
        document.getElementById('coApplicant_correspondence_district').value = '';
        document.getElementById('coApplicant_correspondence_pincode').value = '';
    }
}

function toggleJointAccount() {
    var jointAccountCheckbox = document.getElementById('joint_account_checkbox');
    var jointAccountSections = document.querySelectorAll('.joint-account-section');

    if (jointAccountCheckbox.checked) {
        jointAccountSections.forEach(function(section) {
            section.style.display = 'block';
        });
    } else {
        jointAccountSections.forEach(function(section) {
            section.style.display = 'none';
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    toggleJointAccount();
});
