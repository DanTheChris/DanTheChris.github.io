function InitiateMoveTypes(){

    var input = `Kick, Strike, Strike, Clinch
    Kick, Strike, Strike, Takedown
    Strike, Strike, Takedown, Submission
    Kick, Kick, Strike, Strike
    Kick, Kick, Strike, Clinch
    Kick, Kick, Strike, Takedown
    Strike, Strike, Strike, Kick
    Takedown, Strike, Strike, Submission
    Clinch, Strike, Strike, Takedown
    Clinch, Takedown, Strike, Submission`;

    var sequences = input.split('\n');
    for (let i = 0; i < sequences.length; i++) {
        sequences[i] = sequences[i].trim();
        sequences[i] = sequences[i].split(',');
    }
    return sequences;
};

function CreateNewStrike(){
    var strikes = [['Punch',['Jab', 'Cross', 'Hook', 'Uppercut']],
                    ['Strike', ['Palm heel', 'Hammer fist', 'Back fist', 'Knifehand strike', 'Headbutt', 'Spinning backfist']],
                    ['Elbow', ['Front elbow', 'Side elbow', 'Spinning Back Elbow']],
                    ['Knee', ['Knee Strike', 'Flying Knee Strike']],
                    ['Block', ['Inside block', 'Outside block', 'High block', 'Low block']]];
    var strike = {};
    i = Math.floor(Math.random() * strikes.length)
    strike.move = strikes[i][0]
    strike.specificMove = strikes[i][1][Math.floor(Math.random() * strikes[i][1].length)]
    return strike
}

function DetermineSubtypes(thisSequence){
    subtypeList = []
    for (let inc = 0; i < thisSequence.length; inc++) {
    switch(thisSequence[inc]) {
        case ('Strike'):
            var subtype = CreateNewStrike();
            break;
        case ('Kick'):
            var kicks = ['Front kick', 'Side kick', 'Roundhouse kick', 'Back kick', 'Spinning back kick', 'Hook kick', 'Push kick', 'Crescent kick', 'Flying side kick'];
            var subtype = {move:'Kick'};
            subtype.specificMove = kicks[Math.floor(Math.random() * kicks.length)];
            break;
        case ('Clinch'):
            var clinches = ['Muay Thai Clinch', 'Boxing clinch', 'Wrestling clinch'];
            var subtype = {move:'Clinch'};
            subtype.specificMove = clinches[Math.floor(Math.random() * clinches.length)];
            break;
        case ('Takedown'):
            var takedowns = ['Single leg takedown', 'Double leg takedown', 'Foot sweep', 'Shoulder throw', 'Hip throw', 'Body lock takedown', 'Ankle pick'];
            var subtype = {move:'Takedown'};
            subtype.specificMove = takedowns[Math.floor(Math.random() * takedowns.length)];
            break;
        case ('Submission'):
            var submissions = ['Single leg takedown', 'Double leg takedown', 'Foot sweep', 'Shoulder throw', 'Hip throw', 'Body lock takedown', 'Ankle pick'];
            var subtype = {move:'Submission'};
            subtype.specificMove = submissions[Math.floor(Math.random() * submissions.length)];
            break;
    };
    subtypeList.push(subtype);};

    return subtypeList
};


function ChangeMoveTypes(){
    mySequences = InitiateMoveTypes();

    mySequence = mySequences[Math.floor(Math.random() * mySequences.length)];
    mySubsequence = DetermineSubtypes(mySequence);
    
    document.getElementById('type_1').innerHTML = '<h4>' + mySequence[0] + '</h4>';
    document.getElementById('type_2').innerHTML = '<h4>' + mySequence[1] + '</h4>';
    document.getElementById('type_3').innerHTML = '<h4>' + mySequence[2] + '</h4>';
    document.getElementById('type_4').innerHTML = '<h4>' + mySequence[3] + '</h4>';
};
