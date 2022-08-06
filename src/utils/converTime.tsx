export const convertTime = (time: number) => {

    let fulltime = "";

    let h: number | string = Math.floor(time / (60 * 60));
    let dm: number | string = time % (60 * 60);
    let m: number | string = Math.floor(dm / 60);
    let ds: number | string = dm % 60;
    let s: number | string = Math.ceil(ds);

    if (s === 60) {

        s = 0;
        m = m + 1;
    }

    if (s < 10) {

        s = '0' + s;

    }

    if (m === 60) {

        m = 0;
        h = h + 1;

    }

    if (m < 10) {

        m = '0' + m;

    }

    h === 0 ?  fulltime = m + ':' + s : fulltime = h + ':' + m + ':' + s;

    return fulltime;
    
}