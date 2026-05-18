import { Request, Response } from 'express';

import Lead from '../models/Lead';

export const getLeads = async (
  req: Request,
  res: Response
) => {

  const page =
    Number(req.query.page) || 1;

  const limit = 5;

  const skip =
    (page - 1) * limit;

  const query: any = {};

  if (req.query.status) {
    query.status =
      req.query.status;
  }

  if (req.query.source) {
    query.source =
      req.query.source;
  }

  if (req.query.search) {

    query.$or = [
      {
        name: {
          $regex: req.query.search,
          $options: 'i',
        },
      },
      {
        email: {
          $regex: req.query.search,
          $options: 'i',
        },
      },
    ];
  }

  const sortOption =
    req.query.sort === 'oldest'
      ? 1
      : -1;

  const leads =
    await Lead.find(query)
      .sort({
        createdAt: sortOption,
      })
      .skip(skip)
      .limit(limit);

  const total =
    await Lead.countDocuments(query);

  res.json({
    data: leads,

    pagination: {
      page,
      totalPages:
        Math.ceil(total / limit),
      total,
    },
  });
};

export const createLead = async (
  req: Request,
  res: Response
) => {

  const lead =
    await Lead.create(req.body);

  res.status(201).json(lead);
};

export const updateLead = async (
  req: Request,
  res: Response
) => {

  const lead =
    await Lead.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

  res.json(lead);
};

export const deleteLead = async (
  req: Request,
  res: Response
) => {

  await Lead.findByIdAndDelete(
    req.params.id
  );

  res.json({
    message: 'Lead deleted',
  });
};

export const importLeads = async (
  req: Request,
  res: Response
) => {

  try {

    const leads = req.body;

    await Lead.insertMany(leads);

    res.json({
      message:
        'Leads imported successfully',
    });

  } catch (error) {

    res.status(500).json({
      message: 'Import failed',
    });

  }
};