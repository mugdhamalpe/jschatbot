function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return ["Paper", " Sorry you lost!"]
    } else if (input == "paper") {
        return ["Scissors", " Sorry you lost!"]
    } else if (input == "scissors") {
        return ["Rock", " Sorry you lost!"]
    } else if (input == "when will covid end?") {
        return "IN YOUR DREAMS😂";
    } else if (input == "how to study for endsems?") {
        return "Idhar tp karne se achha thoda padhle jaake, jaaaa!"
    } else if (input == "debsoc event details" || input == "debsoc announcement" || input == "next debsoc debate competition date") {
        return "🗣️PICT DebSoc🗣️🔴 Reminder 🔴 🛑 Volunteers for the Extempore Competition🛑 Hey everyone! 😄This is a reminder to volunteer for organising the Extempore Competition on occasion of Independence Day. 🇮🇳 Interested people please fill the form below before tomorrow (21/07) noon (12pm)👇🏻";
    } else if (input == "abc xyz alumni contact info") {
        return "Contact no. of abc xyz: 888-888-888";
    } else if (input == "nice" || input == "good") {
        return "Glad to hear that. What can I do for you?";
    }

    // Simple responses
    if (input == "hello" || input == "hi" || input == "hey") {
        return "Hello there! How can I help you?";
    } else if (input == "Hello, how's it going?") {
        return "Great! What can I do for you today?";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "recent pisb event") {
        return "CTD";
    } else if (input == "recent pisb event dates"){
        return ["Following are the dates of CTD events", "1 - NCC - 23rd July 2021, 9-11 pm", "2 - RC - 25th July 2021, 9-11 pm", "3 - InQuizitive - 25th July 2021, 6-7 pm", "4 - NTH - 24th July 2021, 9 pm"];
    }
    else {
        return "Try asking something else!";
    }
}