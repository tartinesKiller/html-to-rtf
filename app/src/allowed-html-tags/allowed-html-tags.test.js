const should          = require('should');
const AllowedHtmlTags = require('./allowed-html-tags.class');

describe('AllowedHtmlTagsTest', () => {
  it('getRtfReferenceTag', () => {
    should(AllowedHtmlTags.getRtfReferenceTag('b')).be.equal('{\\b');
    should(AllowedHtmlTags.getRtfReferenceTag('/b')).be.equal('}');
    should(AllowedHtmlTags.getRtfReferenceTag('')).be.undefined();
    should(AllowedHtmlTags.getRtfReferenceTag('notExists')).be.undefined();
    should(AllowedHtmlTags.getRtfReferenceTag('/notExists')).be.undefined();
  });
});