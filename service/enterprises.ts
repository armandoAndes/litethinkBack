import EnterprisesEntity, { Enterprises } from "../models/enterprises";

import { Request, Response } from "express";

export const getEnterprises = async (req: Request, res: Response) => {
  try {
    const enterprises = await EnterprisesEntity.findAll();
    return res.status(200).json(enterprises);
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const createEnterprises = async (req: Request, res: Response) => {
  try {
    const enterprise: Enterprises = req.body.data;
    console.log("BODY createEnterprises", enterprise);
    const enterpriseExist = await EnterprisesEntity.findOne({
      where: {
        nit: enterprise.nit,
      },
    });
    if (enterpriseExist) {
      return res.status(400).json({
        message: `Ya existe la empresa con el nit ${enterprise.nit}`,
      });
    }
    const newEnterprise = EnterprisesEntity.create({
      name: enterprise.name,
      address: enterprise.address,
      nit: enterprise.nit,
      phone: enterprise.phone,
    });
    return res.status(200).json(newEnterprise);
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const deleteEnterprises = async (req: Request, res: Response) => {
  try {
    console.log("BODY deleteEnterprises", req.body);
    const enterpriseExist = await EnterprisesEntity.findByPk(req.body.data.id);
    if (!enterpriseExist) {
      return res.status(400).json({
        message: `Ya existe la empresa ${req.body.data.id}`,
      });
    }
    await EnterprisesEntity.destroy({
      where: {
        id: req.body.data.id,
      },
    });
    return res.status(200).json(enterpriseExist);
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const updateEnterprises = async (req: Request, res: Response) => {
  try {
    console.log("BODY updateEnterprises", req.body.body);
    const enterprise: Enterprises = req.body.body;
    const resEnterprise = await EnterprisesEntity.findByPk(enterprise.id);
    //console.log("RES FIND PK", resEnterprise)
    if (!resEnterprise) {
      return res.status(404).json({
        message: `No existe la empresa ${req.body.id}`,
      });
    }
    await EnterprisesEntity.update(enterprise, {
      where: {
        id: enterprise.id,
      },
    });
    return res.status(200).json(resEnterprise);
  } catch (error) {
    return res.status(500).json(error);
  }
};
