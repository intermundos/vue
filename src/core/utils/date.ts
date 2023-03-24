import format            from 'date-fns/format'
import add               from 'date-fns/addDays'
import isBefore          from 'date-fns/isBefore'
import differenceInHours from 'date-fns/differenceInHours'

const formatDate = ( date, f = 'dd/MM/yyyy' ) => format( new Date( date ), f )
const addDays = ( date, amount ) => add( new Date( date ), amount )
const isOlderThan = ( newDate, oldDate, hours: number ): boolean => differenceInHours( newDate, oldDate ) > hours

export { formatDate, addDays, isBefore, differenceInHours, isOlderThan }
