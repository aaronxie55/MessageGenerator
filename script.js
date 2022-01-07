const messageSubjects = ['You', 'Me', 'I', 'He', 'She']
const messagePredicates = ['should', 'can', 'need']
const messageQuotes = ['Be yourself; everyone else is already taken.', 'Be the change that you wish to see in the world.', 'We accept the love we think we deserve.']

const MessageFactory = (subject, predicate, quote) => {
    return {
        subject: subject,
        predicate: predicate,
        quote: quote
    }
}

var randomMessage = MessageFactory(messageSubjects, messagePredicates, messageQuotes)

/* console.log(randomMessage) */

const randomSelect = (obj, key) => {
    const randomIndex = Math.floor(Math.random() * obj[key].length)
    const elementSelect = obj[key][randomIndex];

    return elementSelect
}

console.log(randomSelect(randomMessage, 'subject'))