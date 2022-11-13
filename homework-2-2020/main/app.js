function addTokens(input, tokens) {
    if (typeof input === 'string') {
        if (input.length > 5) {
            aux = tokens.find(token => (typeof token.tokenName !== 'string') && (token.tokenName !== null))
            if (aux === undefined) {
                if (input.includes('...') === true) {
                    output = tokens.find(token => (typeof token.tokenName === 'string'));
                    aux = input.replace('...','');
                    t = aux.concat('${'+output.tokenName+'}');
                    return t;
                }
                else {
                    return input;
                }
            }
            else {
                throw new Error('Invalid array format');
            }
        }
        else {
            throw new Error('Input should have at least 6 characters');
        }

    }
    else {
        throw new Error('Invalid input');
    }
}

const app = {
    addTokens: addTokens
}

module.exports = app;