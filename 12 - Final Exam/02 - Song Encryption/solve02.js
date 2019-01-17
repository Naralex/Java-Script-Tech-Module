function solve02(input) {
    let encryptedSongs = [];

    for (let el of input) {

        if (el !== 'end') {
            let [artist, song] = el.split(':');
            if (artist.match(/^[A-Z][a-z\s\']+/g)) {
                if (song.match(/^[A-Z]+/g)) {
                    let encryptionKey = artist.length;
                    let encryptedArtist = '';
                    let encryptedSong = '';

                    for (let letter of artist) {
                        if (letter !== ' ' && letter !== '\'') {
                            if (letter.charCodeAt(0) + encryptionKey > 122){
                                encryptedArtist += String.fromCharCode(((letter.charCodeAt(0) + encryptionKey)-123) + 97);
                            }else {
                                encryptedArtist += String.fromCharCode(letter.charCodeAt(0) + encryptionKey);
                            }
                        }
                        else {
                            encryptedArtist += letter;
                        }
                    }
                    for (let letter of song) {
                        if (letter !== ' ' && letter !== '\'') {
                            if (letter.charCodeAt(0) + encryptionKey > 90){
                                encryptedSong += String.fromCharCode(((letter.charCodeAt(0) + encryptionKey)-91) + 65);
                            }else {
                                encryptedSong += String.fromCharCode(letter.charCodeAt(0) + encryptionKey);
                            }
                        }
                        else {
                            encryptedSong += letter;
                        }
                    }
                    encryptedSongs.push(`${encryptedArtist}@${encryptedSong}`);
                }
                else {
                    encryptedSongs.push(`Invalid input!`);
                }
            }else {encryptedSongs.push(`Invalid input!`);}

        }
        else {
            break
        }
    }
    for (let el of encryptedSongs) {
        if (el !== 'Invalid input!') {
            console.log(`Successful encryption: ${el}`)
        }else {
            console.log(el);
        }
    }
}
//
// solve02([ 'Eminem:VENOM',
//     'Linkin park:NUMB',
//     'Drake:NONSTOP',
//     'Adele:HELLO',
//     'end' ]);
solve02(['Michael Jackson:ANOTHER PART OF ME',
    'Adele:ONE AND ONLY',
    'Guns n\'roses:NOVEMBER RAIN',
    'Christina Aguilera: HuRt',
    'end']);