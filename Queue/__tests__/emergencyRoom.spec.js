const {EmergencyRoom, Patient} = require('../Exercises/EmergencyRoom');

test('Emergency Room', () => {
    const HospitalOne = new EmergencyRoom();

    HospitalOne.addToRoom(new Patient('Sam', 5));
    HospitalOne.addToRoom(new Patient('Tolu', 1));
    HospitalOne.addToRoom(new Patient('Ben', 4));
    HospitalOne.addToRoom(new Patient('Gbenga', 2));
    HospitalOne.addToRoom(new Patient('Peter', 3));

    expect(HospitalOne.awaitingTreatment).toEqual(5);
    const patient1 = HospitalOne.attendToPatient();
    const patient2 = HospitalOne.attendToPatient();
    expect(HospitalOne.awaitingTreatment).toEqual(3);

    expect(patient1.name).toEqual('Tolu');
    expect(patient2.name).toEqual('Gbenga');
});
