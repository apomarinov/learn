import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {createStyles} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const useStyles = makeStyles((theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
        container: {
            height: '100%',
            position: 'absolute',
            right: '-10px',
        },
        paper: {
            width: '100%',
            height: '100%',
        },
        [theme.breakpoints.down('s')]: {
            container: {
                width: '330px'
            }
        },
        [theme.breakpoints.up('s')]: {
            container: {
                width: '400px'
            }
        },
    }),
);

export default function Drawer(props) {
    const classes = useStyles();
    const rows = [
        {
            word: 'กล่าวถึง1',
            transcription: ' [กล่าว-ถึง]',
            transliteration: '<glaao;tʉngx>',
            translation: '[V] to mention, tell about, relate',
        },
        {
            word: 'กล่าวถึง2',
            transcription: ' [กล่าว-ถึง]',
            transliteration: '<glaao;tʉngx>',
            translation: '[V] to mention, tell about, relate',
        },
        {
            word: 'กล่าวถึง3',
            transcription: ' [กล่าว-ถึง]',
            transliteration: '<glaao;tʉngx>',
            translation: '[V] to mention, tell about, relate',
        },
        {
            word: 'กล่าวถึง4',
            transcription: ' [กล่าว-ถึง]',
            transliteration: '<glaao;tʉngx>',
            translation: '[V] to mention, tell about, relate',
        },
        {
            word: 'กล่าวถึง5',
            transcription: ' [กล่าว-ถึง]',
            transliteration: '<glaao;tʉngx>',
            translation: '[V] to mention, tell about, relate',
        },
        {
            word: 'กล่าวถึง6',
            transcription: ' [กล่าว-ถึง]',
            transliteration: '<glaao;tʉngx>',
            translation: '[V] to mention, tell about, relate',
        },
        {
            word: 'กล่าวถึง7',
            transcription: ' [กล่าว-ถึง]',
            transliteration: '<glaao;tʉngx>',
            translation: '[V] to mention, tell about, relate',
        },
        {
            word: 'กล่าวถึง8',
            transcription: ' [กล่าว-ถึง]',
            transliteration: '<glaao;tʉngx>',
            translation: '[V] to mention, tell about, relate',
        },
        {
            word: 'กล่าวถึง9',
            transcription: ' [กล่าว-ถึง]',
            transliteration: '<glaao;tʉngx>',
            translation: '[V] to mention, tell about, relate',
        },
        {
            word: 'กล่าวถึง10',
            transcription: ' [กล่าว-ถึง]',
            transliteration: '<glaao;tʉngx>',
            translation: '[V] to mention, tell about, relate',
        },
        {
            word: 'กล่าวถึง11',
            transcription: ' [กล่าว-ถึง]',
            transliteration: '<glaao;tʉngx>',
            translation: '[V] to mention, tell about, relate',
        },
        {
            word: 'กล่าวถึง12',
            transcription: ' [กล่าว-ถึง]',
            transliteration: '<glaao;tʉngx>',
            translation: '[V] to mention, tell about, relate',
        },
        {
            word: 'กล่าวถึง13',
            transcription: ' [กล่าว-ถึง]',
            transliteration: '<glaao;tʉngx>',
            translation: '[V] to mention, tell about, relate',
        },
        {
            word: 'กล่าวถึง14',
            transcription: ' [กล่าว-ถึง]',
            transliteration: '<glaao;tʉngx>',
            translation: '[V] to mention, tell about, relate',
        },
        {
            word: 'กล่าวถึง15',
            transcription: ' [กล่าว-ถึง]',
            transliteration: '<glaao;tʉngx>',
            translation: '[V] to mention, tell about, relate',
        },
        {
            word: 'กล่าวถึง16',
            transcription: ' [กล่าว-ถึง]',
            transliteration: '<glaao;tʉngx>',
            translation: '[V] to mention, tell about, relate',
        },
        {
            word: 'กล่าวถึง17',
            transcription: ' [กล่าว-ถึง]',
            transliteration: '<glaao;tʉngx>',
            translation: '[V] to mention, tell about, relate',
        },
        {
            word: 'กล่าวถึง18',
            transcription: ' [กล่าว-ถึง]',
            transliteration: '<glaao;tʉngx>',
            translation: '[V] to mention, tell about, relate',
        },
    ];
    return (
        <Backdrop className={classes.backdrop} open={props.open} onClick={props.handleClose}>
            <div className={classes.container}>
                <TableContainer component={Paper} className={classes.paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Word</TableCell>
                                <TableCell align="right">Pronounce</TableCell>
                                <TableCell align="right">Translation</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.word}>
                                    <TableCell scope="row">
                                        {row.word}
                                    </TableCell>
                                    <TableCell align="right">{row.transcription} - {row.transliteration}</TableCell>
                                    <TableCell align="right">{row.translation}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Backdrop>
    );
}
