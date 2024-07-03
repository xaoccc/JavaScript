function pyramid(base, increment) {
    let [height, counter] = [0,0];
    let mats = {stone: 0, marble: 0, lapis_Lazuli: 0, gold: 0}

    function capitalize(str) {
        str = str.replace('_', ' ');
        return str.replace(/^\w/, c => c.toUpperCase()).replace(/\s\w/g, c => c.toUpperCase());
      }

    height = Math.floor(Math.ceil(base / 2) * increment);
    for (let i=base-2; i>0; i-=2) {
        counter += 1;
        mats.stone += i**2;
        (counter % 5 === 0) ? mats.lapis_Lazuli += 4 * (i+1) : mats.marble += 4 * (i+1);       
    }

    mats.gold = (base % 2 === 0) ? 4 : 1;

    for (let mat in mats) {        
        console.log(`${capitalize(mat)} required: ${Math.ceil(mats[mat] * increment)}`);
    }
    console.log(`Final pyramid height: ${height}`)
}
