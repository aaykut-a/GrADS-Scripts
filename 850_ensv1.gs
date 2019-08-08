


'reinit'




prompt "Enter the month:"
pull month
prompt "Enter the day:"
pull day
prompt "Enter the run:"
pull run
prompt "Enter latitude:"
pull lati
prompt "Enter longtitude:"
pull longt
prompt "Enter the title of the map:"
pull title


'sdfopen https://nomads.ncep.noaa.gov:9090/dods/gens/gens2019'month''day'/gep_all_'run'z'

'set t 1'
'q time'
timestr=subwrd(result,3)
hhb=substr(timestr,1,2)
ddb=substr(timestr,4,2)
mmb=substr(timestr,6,3)
yyb=substr(timestr,9,4)

m3= 'JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC'
i=1
while i<=12
  tmp = subwrd(m3,i)
  if mmb = tmp
   mmm=i
  endif
  i=i+1
endwhile

if mmm < 10
mmm= '0'mmm
endif

i=1

while(i<=21)


'set vpage 0.0 11.0 0.0 8.5'
'set parea 0.4 10.8 0.8 7.8'
'set lat 'lati
'set lon 'longt
'set ylab on'
'set vrange -30 40'
'set cstyle 1'
'set ccolor 'i''
'set grads off'
'set grid on'
'set t 1 65'
'set e 'i''
'set lev 850'
'set display color black'

'd tmpprs-273.15'





i=i+1
endwhile

'close 1'


'sdfopen https://nomads.ncep.noaa.gov:9090/dods/gfs_0p25/gfs2019'month''day'/gfs_0p25_'run'z'

'set vpage 0.0 11.0 0.0 8.5'
'set parea 0.4 10.8 0.8 7.8'
'set lat 'lati
'set lon 'longt
'set ylab on'
'set vrange -30 40'
'set grads off'
'set grid on'
'set t 1 65'
'set xlab off'
'set cstyle 1'
'set cthick 12'
'set ccolor 2'
'set lev 850'
'set display color black'

'd tmpprs-273.15'

'close 1'



space=" "
'set strsiz 0.1 0.1'
'draw string 8.2 8.3 Run:'ddb space mmm space yyb space hhb Z
'set string 1 c 10 0'
'set strsiz 0.18 0.18'
'draw string 5.3 8 'title' 850 hPa Temperature Diagram (21 Scenarios and Main Run)'
'set string 1 c 1.25 0'
'set strsiz 0.1 0.15'
'draw string 1 0.3 Data: GFS Ensemble'
'set line 2 1 12'
'draw line  4 0.3 5 0.3'
'draw string  5.65 0.3 GFS Main Run'

'gxprint 850_ens.png x1720 y1300'
