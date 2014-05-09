'use strict';

var expect = chai.expect;
var stub = sinon.stub;

var console = {
        log: stub()
    }
    
describe('Kata', function(){
    afterEach(function(){
        console.log.reset();
    });
    
    describe('pitchToFrequency tests', function() {
        it('method pitchToFrequency should exist', function() {
            expect(pitchToFrequency).to.not.equal(undefined);
        });
        
        it('should call log twice for a call', function(){
            pitchToFrequency('A3');
            expect(console.log.calledTwice).to.be.true;
        });
        
        it('should log input', function(){
            pitchToFrequency('A3');
            expect(console.log.calledWith('pitchToFrequency pitch parameter value = A3')).to.be.true;
        });
        
        it('should log return', function(){
            pitchToFrequency('A3');
            expect(console.log.calledWith('pitchToFrequency frequency return value = 220')).to.be.true;
        });
        
        it('should return 220 when pitch is A3', function() {
            expect(pitchToFrequency('A3')).to.equal(220);
        });
        
        it('should return 233 when pitch is A#', function() {
            expect(pitchToFrequency('A#')).to.equal(233);
        });
        
        it('should return 247 when pitch is B', function() {
            expect(pitchToFrequency('B')).to.equal(247);
        });
        
        it('should return 262 when pitch is C', function() {
            expect(pitchToFrequency('C')).to.equal(262);
        });
        
        it('should return 277 when pitch is C#', function() {
            expect(pitchToFrequency('C#')).to.equal(277);
        });
        
        it('should return 294 when pitch is D', function() {
            expect(pitchToFrequency('D')).to.equal(294);
        });
        
        it('should return 311 when pitch is D#', function() {
            expect(pitchToFrequency('D#')).to.equal(311);
        });
        
        it('should return 330 when pitch is E', function() {
            expect(pitchToFrequency('E')).to.equal(330);
        });
        
        it('should return 349 when pitch is F', function() {
            expect(pitchToFrequency('F')).to.equal(349);
        });
        
        it('should return 367 when pitch is F#', function() {
            expect(pitchToFrequency('F#')).to.equal(367);
        });
        
        it('should return 392 when pitch is G', function() {
            expect(pitchToFrequency('G')).to.equal(392);
        });
        
        it('should return 415 when pitch is G#', function() {
            expect(pitchToFrequency('G#')).to.equal(415);
        });
        
        it('should return 440 when pitch is A4', function() {
            expect(pitchToFrequency('A4')).to.equal(440);
        });
        
        it('should return undefined for a date parameter', function() {
        expect(pitchToFrequency(new Date())).to.equal(undefined);
      });
      
      it('should return undefined for all other string parameters', function() {
          expect(pitchToFrequency('XYZ')).to.equal(undefined);
          expect(pitchToFrequency('')).to.equal(undefined); 
          expect(pitchToFrequency('555')).to.equal(undefined); 
      });
      
      it('should return undefined for an undefined parameter', function() {
          expect(pitchToFrequency(undefined)).to.equal(undefined);
      });
      
      
      it('should return undefined for a numberic parameter', function() {
          expect(pitchToFrequency(1.2)).to.equal(undefined);
      });

    });


    describe('frequencyToPitch tests', function() {
        it('method frequencyToPitch should exist', function() {
            expect(frequencyToPitch).to.not.equal(undefined);
        });
        
        it('should call log twice for a call', function(){
            frequencyToPitch(220);
            expect(console.log.calledTwice).to.be.true;
        });
        
        it('should log input', function(){
            frequencyToPitch(220);
            expect(console.log.calledWith('frequencyToPitch frequency parameter value = 220')).to.be.true;
        });
        
        it('should log return', function(){
            frequencyToPitch(220);
            expect(console.log.calledWith('frequencyToPitch pitch return value = A3')).to.be.true;
        });
        
        it('should return A3 when frequency is 220', function() {
            expect(frequencyToPitch(220)).to.equal('A3');
        }); 

        it('should return A# when frequency is 233', function() {
            expect(frequencyToPitch(233)).to.equal('A#');
        });

        it('should return B when frequency is 247', function() {
            expect(frequencyToPitch(247)).to.equal('B');
        });

        it('should return C when frequency is 262', function() {
            expect(frequencyToPitch(262)).to.equal('C');
        });

        it('should return C# when frequency is 277', function() {
            expect(frequencyToPitch(277)).to.equal('C#');
        });

        it('should return D when frequency is 294', function() {
            expect(frequencyToPitch(294)).to.equal('D');
        });

        it('should return D# when frequency is 311', function() {
            expect(frequencyToPitch(311)).to.equal('D#');
        });
        
        it('should return E when frequency is 330', function() {
            expect(frequencyToPitch(330)).to.equal('E');
        });

        it('should return F when frequency is 349', function() {
            expect(frequencyToPitch(349)).to.equal('F');
        });

        it('should return F# when frequency is 367', function() {
            expect(frequencyToPitch(367)).to.equal('F#');
        });

        it('should return G when frequency is 392', function() {
            expect(frequencyToPitch(392)).to.equal('G');
        });

        it('should return G# when frequency is 415', function() {
            expect(frequencyToPitch(415)).to.equal('G#');
        });

        it('should return A4 when frequency is 440', function() {
            expect(frequencyToPitch(440)).to.equal('A4');
        });

         it('should return undefined for a date paramter', function() {
      expect(frequencyToPitch(new Date())).to.equal(undefined);
  });
  
  it('should return undefined for a string parameter', function() {
      expect(frequencyToPitch('XYZ')).to.equal(undefined);
  });
  
  it('should return undefined for an undefined parameter', function() {
      expect(frequencyToPitch(undefined)).to.equal(undefined);
  });
  
  
  it('should return undefined for all other numberic parameters', function() {
      expect(frequencyToPitch(1.2)).to.equal(undefined);
      expect(frequencyToPitch(55)).to.equal(undefined);
      expect(frequencyToPitch(-10000)).to.equal(undefined);
  });

    });
});
