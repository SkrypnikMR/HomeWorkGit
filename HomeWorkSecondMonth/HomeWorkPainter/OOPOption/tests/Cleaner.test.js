import Cleaner from '../src/js/Classes/Cleaner'

describe('Cleaner clearCanvas', ()=>{
    const cleaner = new Cleaner();
    it('should to be defined', ()=>{
       expect(cleaner.clearCanvas).toBeDefined();
    })
    it('should to be function', ()=>{
       expect(typeof cleaner.clearCanvas).toBeDefined();
    })
    it('should called without arguments', ()=>{
        try{
            cleaner.clearCanvas();
        }catch(e){
            expect(e.message).toBe('work only with all arguments')
        }
     })
    it('should call clearRect method of the context of canvas', ()=>{
        const canvas = {getContext: (str)=> {
            if(str === '2d'){
                return {clearRect: jest.fn()}
            }
            }}
        const context = canvas.getContext('2d');
            cleaner.clearCanvas(context, canvas)
        expect(context.clearRect).toHaveBeenCalled();
     })
})