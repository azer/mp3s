var mp3s = require("./");

it('fetches mp3s from anarko.org/player.js', function(done){

  mp3s('http://anarko.org/player.js', function (error, result) {
    expect(result[0]).to.equal('http://tayfabandista.org/player/haydi_barikata.mp3');
    expect(result[10]).to.equal('http://tayfabandista.org/pasanin_basucu_sarkilari/player/pardon_afedersiniz_mr_genelkurmay.mp3');
    expect(result[27]).to.equal('http://tayfabandista.org/sinirsiz-ulussuz-surgunsuz/mp3/kimyerlikimgocmen.mp3');

    expect(result.length).to.equal(28);
    done();
  });

});
