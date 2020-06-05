import React, {useEffect, useLayoutEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Word from "./Word";
import Space from "./Space";
import Fab from "@material-ui/core/Fab";
import {LocalLibrary, Translate} from "@material-ui/icons";
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import TranslationRoot from "./TranslationRoot";
import Translation from "./Translation";
import Drawer from "./Drawer";
import Definition from "./Definition";

const useStyles = makeStyles(theme => ({
    root: {

    },
    lessonText: {
        fontSize: '2em',
        lineHeight: '1.6em'
    },
    image: {
        width: '100%',
        height: '300px',
        background: 'aquamarine',
        margin: '20px 0 20px 0'
    },
    menu: {
        width: '0px',
        position: 'fixed',
        bottom: '10px',
        right: '75px',
        zIndex: 999999999,
    },
    showTranslation: {
        marginTop: '-30px',
        lineHeight: '3em'
    },
    translation: {
        position: 'relative',
    },
    displayBlock: {
        display: 'block'
    },
    inlineTranslation: {
        display: 'none'
    },
}));

function Lesson(props) {
    let mdDown = !isWidthUp('md', props.width)
    const classes = useStyles();
    const [showTranslation, setShowTranslation] = useState(false);
    const [showNewVocab, setShowNewVocab] = useState(false);
    const [showDefinition, setShowDefinition] = useState(null);
    const translationRoot = {
        'trans_id': React.useRef(null),
        'trans_id2': React.useRef(null),
    };
    const word =         {
        word: 'กล่าวถึง1',
        transcription: ' [กล่าว-ถึง]',
        transliteration: '<glaao;tʉngx>',
        translation: '[V] to mention, tell about, relate',
    };

    return (
        <div className={classes.root}>
            <Drawer open={showNewVocab} handleClose={() => setShowNewVocab(false)}/>
            {showDefinition && (<Definition word={showDefinition} onClose={() => setShowDefinition(null)}/>)}
            <Grid container spacing={1} direction={'column'} className={classes.menu} alignItems={'flex-end'}>
                <Grid item xs={1}>
                    <Fab aria-label="like" onClick={() => setShowNewVocab(!showNewVocab)}>
                        <LocalLibrary/>
                    </Fab>
                </Grid>
                <Grid item xs={1}>
                    <Fab aria-label="like" onClick={() => setShowTranslation(!showTranslation)}>
                        <Translate/>
                    </Fab>
                </Grid>
            </Grid>
            <Grid container spacing={3} justify={'center'}>
                <Grid item md={6} sm={9} xs={10} className={classes.lessonText}>
                    <Space width={35}/>
                    <Word onClick={() => setShowDefinition(word)}>ฝน</Word>
                    <Word onClick={() => setShowDefinition(word)}>เริ่ม</Word>
                    <Word onClick={() => setShowDefinition(word)}>ตกลง</Word>
                    <Word onClick={() => setShowDefinition(word)}>มา</Word>
                    <Word onClick={() => setShowDefinition(word)}>อีก</Word>
                    <Word onClick={() => setShowDefinition(word)}>มา</Word>
                    <Word onClick={() => setShowDefinition(word)}>นี</Word>
                    <Word onClick={() => setShowDefinition(word)}>หน้า</Word>
                    <Word onClick={() => setShowDefinition(word)}>เสีย</Word>
                    <Word onClick={() => setShowDefinition(word)}>เพราะ</Word>
                    <Word onClick={() => setShowDefinition(word)}>กลัว</Word>
                    <Word onClick={() => setShowDefinition(word)}>กลับ</Word>
                    <Word onClick={() => setShowDefinition(word)}>บ้าน</Word>
                    <Word onClick={() => setShowDefinition(word)}>ไม่</Word>
                    <Word onClick={() => setShowDefinition(word)}>ได้</Word>
                    <Word onClick={() => setShowDefinition(word)}>ย่า</Word>
                    <Word onClick={() => setShowDefinition(word)}>จึง</Word>
                    <Word onClick={() => setShowDefinition(word)}>ปลอบ</Word>
                    <Word onClick={() => setShowDefinition(word)}>ว่า</Word>
                    <TranslationRoot ref={translationRoot['trans_id']}>
                        {showTranslation && mdDown && (
                            <Translation text={"The rain started raingin this day and blablabla and they went home because they dont like this shit."}/>
                        )}
                    </TranslationRoot>
                    <Space/>
                    <Word onClick={() => setShowDefinition(word)}>“</Word>
                    <Word onClick={() => setShowDefinition(word)}>ตอน</Word>
                    <Word onClick={() => setShowDefinition(word)}>จะ</Word>
                    <Word onClick={() => setShowDefinition(word)}>กลับ</Word>
                    <Word onClick={() => setShowDefinition(word)}>บ้าน</Word>
                    <Word onClick={() => setShowDefinition(word)}>ถ้า</Word>
                    <Word onClick={() => setShowDefinition(word)}>ฝน</Word>
                    <Word onClick={() => setShowDefinition(word)}>ยัง</Word>
                    <Word onClick={() => setShowDefinition(word)}>ไม่</Word>
                    <Word onClick={() => setShowDefinition(word)}>หยุด</Word>
                    <Word onClick={() => setShowDefinition(word)}>ย่า</Word>
                    <Word onClick={() => setShowDefinition(word)}>จะ</Word>
                    <Word onClick={() => setShowDefinition(word)}>ให้</Word>
                    <Word onClick={() => setShowDefinition(word)}>อากาง</Word><br/>
                    <div className={classes.image}/>
                    <Space width={35}/>
                    <Word onClick={() => setShowDefinition(word)}>ร่ม</Word>
                    <Word onClick={() => setShowDefinition(word)}>ไป</Word>
                    <Word onClick={() => setShowDefinition(word)}>ส่ง</Word>
                    <Word onClick={() => setShowDefinition(word)}>ฤดูฝน</Word>
                    <Word onClick={() => setShowDefinition(word)}>ก็เป็นอย่างนี้แหละ</Word>
                    <Word onClick={() => setShowDefinition(word)}>ฝนตกลงมา</Word>
                    <Word onClick={() => setShowDefinition(word)}>เรื่อย</Word>
                    <Word onClick={() => setShowDefinition(word)}>ฝน</Word>
                    <Word onClick={() => setShowDefinition(word)}>เริ่ม</Word>
                    <Word onClick={() => setShowDefinition(word)}>ตกลง</Word>
                    <Word onClick={() => setShowDefinition(word)}>มา</Word>
                    <Word onClick={() => setShowDefinition(word)}>อีก</Word>
                    <Word onClick={() => setShowDefinition(word)}>มา</Word>
                    <Word onClick={() => setShowDefinition(word)}>นี</Word>
                    <Word onClick={() => setShowDefinition(word)}>หน้า</Word>
                    <Word onClick={() => setShowDefinition(word)}>เสีย</Word>
                    <TranslationRoot ref={translationRoot['trans_id2']}>
                        {showTranslation && mdDown && (
                            <Translation text={"The rain started raingin this day and blablabla and they went home because they dont like this shit."}/>
                        )}
                    </TranslationRoot>
                    <Word onClick={() => setShowDefinition(word)}>เพราะ</Word>
                    <Word onClick={() => setShowDefinition(word)}>กลัว</Word>
                    <Word onClick={() => setShowDefinition(word)}>กลับ</Word>
                    <Word onClick={() => setShowDefinition(word)}>บ้าน</Word>
                    <Word onClick={() => setShowDefinition(word)}>ไม่</Word>
                    <Word onClick={() => setShowDefinition(word)}>ได้</Word>
                    <Word onClick={() => setShowDefinition(word)}>ย่า</Word>
                    <Word onClick={() => setShowDefinition(word)}>จึง</Word>
                    <Word onClick={() => setShowDefinition(word)}>ปลอบ</Word>
                    <Word onClick={() => setShowDefinition(word)}>ว่า</Word>
                    <Space/>
                    <Word onClick={() => setShowDefinition(word)}>“</Word>
                    <Word onClick={() => setShowDefinition(word)}>ตอน</Word>
                    <Word onClick={() => setShowDefinition(word)}>จะ</Word>
                    <Word onClick={() => setShowDefinition(word)}>กลับ</Word>
                    <Word onClick={() => setShowDefinition(word)}>บ้าน</Word>
                    <Word onClick={() => setShowDefinition(word)}>ถ้า</Word>
                    <Word onClick={() => setShowDefinition(word)}>ฝน</Word>
                    <Word onClick={() => setShowDefinition(word)}>ยัง</Word>
                    <Word onClick={() => setShowDefinition(word)}>ไม่</Word>
                    <Word onClick={() => setShowDefinition(word)}>หยุด</Word>
                    <Word onClick={() => setShowDefinition(word)}>ย่า</Word>
                    <Word onClick={() => setShowDefinition(word)}>จะ</Word>
                    <Word onClick={() => setShowDefinition(word)}>ให้</Word>
                    <Word onClick={() => setShowDefinition(word)}>อากาง</Word><br/>
                    <Word onClick={() => setShowDefinition(word)}>ฝน</Word>
                    <Word onClick={() => setShowDefinition(word)}>เริ่ม</Word>
                    <Word onClick={() => setShowDefinition(word)}>ตกลง</Word>
                    <Word onClick={() => setShowDefinition(word)}>มา</Word>
                    <Word onClick={() => setShowDefinition(word)}>อีก</Word>
                    <Word onClick={() => setShowDefinition(word)}>มา</Word>
                    <Word onClick={() => setShowDefinition(word)}>นี</Word>
                    <Word onClick={() => setShowDefinition(word)}>หน้า</Word>
                    <Word onClick={() => setShowDefinition(word)}>เสีย</Word>
                    <Word onClick={() => setShowDefinition(word)}>เพราะ</Word>
                    <Word onClick={() => setShowDefinition(word)}>กลัว</Word>
                    <Word onClick={() => setShowDefinition(word)}>กลับ</Word>
                    <Word onClick={() => setShowDefinition(word)}>บ้าน</Word>
                    <Word onClick={() => setShowDefinition(word)}>ไม่</Word>
                    <Word onClick={() => setShowDefinition(word)}>ได้</Word>
                    <Word onClick={() => setShowDefinition(word)}>ย่า</Word>
                    <Word onClick={() => setShowDefinition(word)}>จึง</Word>
                    <Word onClick={() => setShowDefinition(word)}>ปลอบ</Word>
                    <Word onClick={() => setShowDefinition(word)}>ว่า</Word>
                    <Space/>
                    <Word onClick={() => setShowDefinition(word)}>“</Word>
                    <Word onClick={() => setShowDefinition(word)}>ตอน</Word>
                    <Word onClick={() => setShowDefinition(word)}>จะ</Word>
                    <Word onClick={() => setShowDefinition(word)}>กลับ</Word>
                    <Word onClick={() => setShowDefinition(word)}>บ้าน</Word>
                    <Word onClick={() => setShowDefinition(word)}>ถ้า</Word>
                    <Word onClick={() => setShowDefinition(word)}>ฝน</Word>
                    <Word onClick={() => setShowDefinition(word)}>ยัง</Word>
                    <Word onClick={() => setShowDefinition(word)}>ไม่</Word>
                    <Word onClick={() => setShowDefinition(word)}>หยุด</Word>
                    <Word onClick={() => setShowDefinition(word)}>ย่า</Word>
                    <Word onClick={() => setShowDefinition(word)}>จะ</Word>
                    <Word onClick={() => setShowDefinition(word)}>ให้</Word>
                </Grid>
                {showTranslation && !mdDown && (
                    <Grid  item md={3} sm={9} xs={10} className={classes.translation}>
                        <Translation root={translationRoot['trans_id']} text={"The rain started raingin this day and blablabla and they went home because they dont like this shit."}/>
                        <Translation root={translationRoot['trans_id2']} text={"The rain started raingin this day and blablabla and they went home because they dont like this shit."}/>
                    </Grid>
                )}
            </Grid>
        </div>
    );
}

export default withWidth()(Lesson);
