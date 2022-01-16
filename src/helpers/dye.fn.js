import crayon from '@me5on/crayon';


const {fg: FG, bg: BG, cc: CC} = crayon.ansi;


const dye = crayon.create({
    box: {
        dim: BG.black + FG.white + CC.dim,
        txt: BG.black + FG.white,
        inf: BG.black + FG.blue,
        wrn: BG.black + FG.yellow,
        err: BG.black + FG.red,
    },
});


export default dye;
