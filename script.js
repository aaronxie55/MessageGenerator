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

var randomMessage = MessageFactory(messageSubjects[0], messagePredicates[0], messageQuotes[0])

console.log(randomMessage)