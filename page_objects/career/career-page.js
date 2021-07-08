class career {
    // Reusable selector getters that will help us to avoid selector duplicates
    get careerPageBtn() { return $('[href="/careers"]'); }
    get jobOpeningsBtn() { return $('[href="https://jobs.lever.co/dave"]'); }
    get seniorQaJobLnk() { return $('[href="https://jobs.lever.co/dave/d708fdf3-59c5-4ad1-8c38-8852526b502c"]'); }
    get jobListingsLst() { return $$(".job-listing"); }

}
module.exports = new career();