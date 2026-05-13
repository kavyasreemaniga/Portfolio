# Config Schema Draft

## Overview
Target is a JSON-driven portfolio where components render from config and only contain presentation logic.

## Files

### `profile.json`
```json
{
  "name": "string",
  "role": "string",
  "blurb": "string",
  "location": "string",
  "links": {
    "linkedin": "url",
    "github": "url",
    "resume": "string"
  },
  "contactMode": "linkedin|email|form"
}
```

### `theme.json`
```json
{
  "colors": {
    "bg": "hex",
    "text": "hex",
    "muted": "hex",
    "primary": "hex",
    "secondary": "hex",
    "line": "hex"
  },
  "radius": {
    "card": "string",
    "chip": "string",
    "button": "string"
  },
  "spacing": {
    "sectionY": "string",
    "cardPadding": "string"
  }
}
```

### `sections.json`
```json
{
  "home": {
    "showHero": true,
    "showStack": true,
    "showExperienceSnapshot": true
  },
  "projects": {
    "showSearch": true,
    "showFilters": true,
    "showFeaturedCard": true
  },
  "resume": {
    "showCapabilities": true,
    "showExperience": true,
    "showEducation": true,
    "showCertifications": true
  }
}
```

### `projects.json`
```json
[
  {
    "title": "string",
    "category": "string",
    "featured": true,
    "description": "string",
    "tech": ["string"],
    "github": "url-or-empty",
    "demo": "url-or-empty",
    "highlights": ["string"]
  }
]
```

### `resume.json`
```json
{
  "techStack": [
    { "category": "string", "items": ["string"] }
  ],
  "experience": [
    {
      "title": "string",
      "company": "string",
      "period": "string",
      "location": "string",
      "highlights": ["string"]
    }
  ],
  "education": [
    {
      "degree": "string",
      "school": "string",
      "location": "string",
      "year": "string"
    }
  ],
  "certifications": [
    { "name": "string", "issuer": "string" }
  ]
}
```

## Validation Rules
- Required top-level files must exist.
- Required string fields must be non-empty.
- URLs should be valid when provided.
- Arrays should default to `[]` if optional and missing.
- Unknown keys are allowed but ignored (forward compatibility).

## Runtime Fallback Policy
- Missing optional values use safe defaults.
- Missing required values surface a clear error message in development.
- Production fallback should avoid crashes and hide broken sections gracefully.
